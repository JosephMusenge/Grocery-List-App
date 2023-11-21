# Import all the required libraries and packages
from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from dotenv import load_dotenv
import os
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Connect backend to frontend with cors
origins = [
    "http://localhost:3000", # frontend endpoint
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

# Get started with FASTAPI
@app.get("/")
async def root():
    return "Who's hungry?"



# Grocery list database (list in this case)
grocery_list = [
    {"id": "001", "name": "oranges"},
    {"id": "002", "name": "bread"}
]

# get food item from list display it
@app.get("/food")
async def get_groceries_list():
    return grocery_list


# # Make a food class
# class Food(BaseModel):
#     id:str
#     name:str

# # Add new item to grocery list
# @app.post('/add') # Using a post request cause we are updating and not getting
# async def add_item(item:Food): # The item parameter should be of type class, same type better results
#     grocery_list.append(item)
#     return "Added " + item.name


# @app.get('/recipes')
# async def find_recipes(item:Food):
#     result = []
#     response = find_by_ingredients(item.name)
#     for recipes in response:
#         recipe = {}
#         recipe["title"] = recipes["title"]
#         recipe["image"] = recipes["image"]
#         result.append(recipe)
#     return result


# def find_by_ingredients(ingredients):
#     url = 'https://api.spoonacular.com/recipes/findByIngredients'
#     headers = {
#         'Content-Type': 'application/json',
#         'x-api-key':os.getenv('SPOONACULAR_API_KEY') }
#     parameters ={
#         'ingredients': ingredients}
#     response = requests.get(url, headers=headers, params=parameters)
#     if (response.status_code == 200):
#         print("The request was a success!")
#     elif (response.status_code == 404):
#         print("Result not found!")
#     return response.json()
    