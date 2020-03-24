from bs4 import BeautifulSoup
import requests
import csv


def scrape_title_url():
    recipe_titles_list = []
    recipe_url_list = []
    for i in range(len(item_on_page)):
        item = item_on_page[i]

        each_title = item.find('h4').get_text()
        each_url = item.find('a')['href']

        recipe_titles_list.append(each_title)
        recipe_url_list.append(each_url)

    return recipe_titles_list,recipe_url_list

def scrape_ingredients(link):
    #html scraping
    one = requests.get(link).text
    one_soup = BeautifulSoup(one, 'lxml')
    recipe_ingredients = []
    #add try and catch here 
    try:
        #-------------------------------------------------------------------------------------
        #  TODO:    
        #       https://www.budgetbytes.com/brown-sugar-bacon-breakfast-sandwiches-chipotle-mayo/
        #       ingredient list --> bacon 	brown sugar 
        #       multiple div classes with wprm-recipe-ingredient-group

        #       SOLN1 : need to change .find to .find_all and then loop over all elements?

        ingredients_container = one_soup.find(class_ = "wprm-recipe-ingredient-group")

        #-------------------------------------------------------------------------------------


        ingredients_list = ingredients_container.find_all(class_ = "wprm-recipe-ingredient-name")

        #add elements to a list
        for i in range(len(ingredients_list)):
            recipe_ingredients.append(ingredients_list[i].get_text())
    finally:
        return recipe_ingredients

for i in range(3,24):
    current_url = ('https://www.budgetbytes.com/category/recipes/page/%s/' % i)
    source = requests.get(current_url).text
    soup = BeautifulSoup(source, 'lxml')

    item_on_page = soup.find_all(class_ = "archive-post")
    titles, links = scrape_title_url()

    all_ingredients = []
    for each_link in links:
        all_ingredients.append(scrape_ingredients(each_link))

    with open('budgetbytes.csv', 'a', newline='') as myfile:
        wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
        for i in range(len(all_ingredients)):
            wr.writerow([titles[i]] + [links[i]] + all_ingredients[i])



