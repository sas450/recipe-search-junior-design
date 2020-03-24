from bs4 import BeautifulSoup
import requests

source = requests.get('https://www.budgetbytes.com/category/recipes/').text

soup = BeautifulSoup(source, 'lxml')

#print(soup.prettify())

#key title --> value link
print(soup.find_all("ul", class_ = "archiveslist tagslist"))
