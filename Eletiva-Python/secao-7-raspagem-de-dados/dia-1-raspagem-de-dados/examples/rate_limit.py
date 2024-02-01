# import requests
# import time


# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)

# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response)
#     time.sleep(6)

# response = requests.get("https://httpbin.org/delay/10")
# print(response)

# try:
#     # recurso demora muito a responder
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.ReadTimeout:
#     # vamos fazer uma nova requisição
#     response = requests.get("http://httpbin.org/delay/1", timeout=2)
# finally:
#     print(response.status_code)
