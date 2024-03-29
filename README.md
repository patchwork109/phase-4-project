# Fry Me to the Moon 

![Fry Me to the Moon](homePage1.png)

## About the Project
- Collaborators: [Vanessa Coelho](https://github.com/vanessa-co), [Sam Genevay](https://github.com/patchwork109), [Grace Nieboer](https://github.com/gnieb)
- The application delivers a user-friendly outer-space themed ordering experience for artisan fry lovers everywhere.

## Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
* ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
* ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
* ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
* [![SQLAlchemy][SQLAlchemy.com]][SQLalchemy-url]
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) 
* ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## Getting Started
1. Fork and Clone the repo
   ```sh
   git clone https://github.com/patchwork109/phase-4-project
   ```
2. Install your environment dependencies and enter virtual environment:
    ```sh
    pipenv install
    ```
    ```sh
    pipenv shell
    ```
3. From the client directory, install client dependencies
    ```sh
    npm install
    ```

4. From the client directory, start the front end
```sh
 npm start
 ```
5. From the server directory, start the back end
```sh
python app.py
```

## How to Use this Application 

![orders](ordering.png) 

Our users will be able to browse all potato creations. They can login in and become a spud member for life. Our users must log in or sign up in order to place a fry order. They can also edit or cancel any orders they have started. Once our users place an order they will be notified that their order is being prepared.

![orderPlaced](placedOrder.png)

## Special Features

**client side features:**
- User Authentication
- Cart Icon
- Home page carousel
- Hovering menu descriptions
- Full featured cart
- Dynamic ordering page

**Server side features:**
- Three Dynamic domain models
- RESTful API architecture
    - (Login, '/login')
    - (Logout, '/logout')
    - (Users, '/users')
    - (PotatoDishes, '/potatodishes')
    - (Orders, '/orders')
    - (OrderById, '/orders/<int:id>')
    - (DishOrders, '/dishorders')
    - (DishOrderById, '/dishorders/<int:id>')
- The ability to GET, POST, PATCH, DELETE

**Made with love, coffee, and preworkout <3**



[SQLAlchemy.com]: https://img.shields.io/badge/-SQLAlchemy-black?style=for-the-badge&logo=serverfault
[SQLalchemy-url]: https://www.sqlalchemy.org/
