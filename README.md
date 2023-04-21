# Team To Do 

Sam

PLACE YOUR ORDER => Modal
Order and Cart CSS

Tomorrow Morning
About Us
ReadMe


# Fry Me to the Moon 
## Phase 4 FullStack Application Project
### Collaborators: Vanessa Coelho, Sam Genevay, Grace Nieboer

## Purpose
This project is a ....

## Built With
- React
- Flask
- Bootstrap
- Material UI
- SQLAlchemy

## Getting Started

Install your dependencies and enter virtual environment:

pipenv install && pipenv shell
cd client
npm install

To start the front end, run the following command from the client directory: npm start
To start the back end, run the following command from the server directory: python app.py

## How to Use this Application 
....



## Special Features
....





# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

//////////////////////////////////////////////

Now let's review that last line...

#### CORS

CORS (Cross-Origin Reference Sharing) is a system that uses HTTP headers to
determine whether resources from different servers-of-origin can be accessed.
If you're using the fetch API to connect your frontend to your Flask backend,
you need to configure CORS on your Flask application instance. Lucky for us,
that only takes one line:

```py
CORS(app)```

By default, Flask-CORS enables CORS on all routes in your application with all
fetching servers. You can also specify the resources that allow CORS. The
following specifies that routes beginning with `api/` allow CORS from any
originating server:

