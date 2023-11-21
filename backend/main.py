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
# origins = [
#     "http://localhost:3000", # frontend endpoint
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["POST", "GET"],
#     allow_headers=["*"],
# )

# Get started with FASTAPI
@app.get("/")
async def root():
    return "Who's hungry?"



# Grocery list database (list in this case)
# grocery_list = [
#     {"id": "001", "name": "oranges"},
#     {"id": "002", "name": "bread"}
# ]


    