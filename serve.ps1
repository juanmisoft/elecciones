# SERVIDOR LOCAL NATIVO EN POWERSHELL PARA EVITAR ERRORES DE CORS
# Hace doble clic sobre este script o ejecútalo en consola para iniciar el portal.

$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Servidor local corriendo en http://localhost:$port/" -ForegroundColor Green
    Write-Host "  Presiona CTRL+C en esta consola para detener el servidor" -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green
    
    # Abre automáticamente el navegador predeterminado
    Start-Process "http://localhost:$port/index.html"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $url = $request.Url.LocalPath
        # Decodifica caracteres especiales simples como espacios (%20)
        $url = $url.Replace("%20", " ")
        if ($url -eq "/") { $url = "/index.html" }
        
        $filePath = Join-Path (Get-Location) $url
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Detecta el tipo de contenido (MIME type)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "text/plain"
            if ($ext -eq ".html" -or $ext -eq ".htm") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".gif") { $contentType = "image/gif" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml; charset=utf-8" }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $response.Close()
        }
        $response.Close()
    }
} catch {
    Write-Host "Error al iniciar el servidor o puerto ocupado: $_" -ForegroundColor Red
} finally {
    $listener.Stop()
}
