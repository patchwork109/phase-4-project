# #!/usr/bin/env python3

# # Standard library imports
# from random import randint, choice as rc

# # Remote library imports
# from faker import Faker

# # Local imports
# from app import app
# from models import db


# if __name__ == '__main__':
#     fake = Faker()
#     with app.app_context():
#         print("Starting seed...")
#         # Seed code goes here!


from config import db
from models import Order, DishOrder, PotatoDish

def seed_data():
    db.drop_all()
    db.create_all()

    # Create PotatoDish 
    plain_fries = PotatoDish(name='Plain Fries', base='Fries', price=3.99)
    cheese_fries = PotatoDish(name='Cheese Fries', base='Fries', topping='Cheese', price=5.99)
    chili_fries = PotatoDish(name='Chili Fries', base='Fries', topping='Chili', price=6.99)
    truffle_fries = PotatoDish(name='Truffle Fries', base='Fries', topping='Truffle', price=7.99)
    garlic_parm_fries = PotatoDish(name='Garlic Parmigiana Fries', base='Fries', topping='Garlic Parmigiana', price=8.99)

    # Create Order 
    order1 = Order(customer_name='Grace Nieboer')
    order2 = Order(customer_name='Sam Genevay')
    order3 = Order(customer_name='Vanessa Coelho')

    # Create DishOrder 
    dish_order1 = DishOrder(order=order1, potato_dish=plain_fries)
    dish_order2 = DishOrder(order=order1, potato_dish=cheese_fries)
    dish_order3 = DishOrder(order=order3, potato_dish=truffle_fries)
    dish_order4 = DishOrder(order=order2, potato_dish=chili_fries)
    dish_order5 = DishOrder(order=order2, potato_dish=garlic_parm_fries)

    # Add objects to session and commit
    db.session.add_all([plain_fries, cheese_fries, chili_fries, truffle_fries, garlic_parm_fries, order1, order2, dish_order1, dish_order2, dish_order3, dish_order4, dish_order5])
    db.session.commit()

if __name__ == '__main__':
    seed_data()



