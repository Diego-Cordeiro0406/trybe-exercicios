# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.firefox.options import Options
# from time import sleep

options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')
# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(options=options)

# requisições para essa instância criada utilizando o método `get`
# response = firefox.get("https://www.google.com.br/")
# response = firefox.get("https://www.python.org/")
firefox.get("https://books.toscrape.com/")
# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
# search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
# search_input.send_keys("selenium")

# pressiona enter para realizar a busca
# search_input.send_keys(Keys.ENTER)


def scrape(url):
    firefox.get(url)
    books = []

    # Itera entre os elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O preço do book está em um elemento da classe 'price_color'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


scrape("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:

    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, 'next')
            .find_element(By.TAG_NAME, 'a').get_attribute('href')
        )
    except NoSuchElementException:
        print("exception handled")
        break

print(all_books)
