import http.server
import socketserver

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

port = 8000
handler_object = MyHttpRequestHandler

with socketserver.TCPServer(("", port), handler_object) as httpd:
    print("Serwer HTTP działa na porcie", port)
    httpd.serve_forever()
