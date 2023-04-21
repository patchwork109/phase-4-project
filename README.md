
# Fry Me to the Moon 
## Phase 4 FullStack Application Project
### Collaborators: Vanessa Coelho, Sam Genevay, Grace Nieboer

## Purpose
To deliver a user friendly ordering experiemce to fry lovers everywhere.

## Built With
- React
- Flask
- Bootstrap
- Material UI
- SQLAlchemy
- Formik

## Getting Started

Install your dependencies and enter virtual environment:

pipenv install && pipenv shell
cd client
npm install

To start the front end, run the following command from the client directory: npm start
To start the back end, run the following command from the server directory: python app.py

## How to Use this Application 
Our users will be able to browse all potato creations. They can login in and become a spud member for life. Our users must log in or sign up in order to place a fry order. They can also edit or cancel any orders they have started. Once our users place an order they will be notified that their order is being prepared.



## Special Features

client side features:
- User Authentication
- Cart Icon
- Home page carousel
- Hovering menu descriptions
- Full featured cart
- Dynamic ordering page

Server side features:
- Dynamic domain models
- fully functioning routes
    (Login, '/login')
    (Logout, '/logout')
    (Users, '/users')
    (PotatoDishes, '/potatodishes')
    (Orders, '/orders')
    (OrderById, '/orders/<int:id>')
    (DishOrders, '/dishorders')
    (DishOrderById, '/dishorders/<int:id>')
- The ability to GET, POST, PATCH, DELETE

** Made with love, coffee, and preworkout <3 **
