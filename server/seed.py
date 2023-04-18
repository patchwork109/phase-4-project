# #!/usr/bin/env python3

# # Standard library imports
# from random import randint, choice as rc

# # Remote library imports
# from faker import Faker

# # Local imports
from app import app
from models import db


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
    plain_fries = PotatoDish(name='Plain Fries', base='Fries', price=3.99, 
                             description="Golden, crispy, and irresistibly salty, our French fries are the perfect side dish for any meal. Served hot and fresh, they're a classic that never goes out of style.", 
                             image= 'https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800')
    cheese_fries = PotatoDish(name='Cheese Fries', base='Fries',  topping='Cheese', price=5.99, 
                              description="Take our delicious French fries and top them with a generous helping of melted cheese, and you've got yourself a winner. Perfect for sharing, these cheesy fries are the ultimate indulgence.",
                              image= 'https://www.acouplecooks.com/wp-content/uploads/2022/06/Cheese-Fries-005.jpg')
    chili_fries = PotatoDish(name='Chili Fries', base='Fries',  topping='Chili', price=6.99, 
                             description="Our hearty and satisfying chili fries are a meal in themselves. Featuring our homemade chili con carne, melted cheese, and a variety of toppings like onions, sour cream, and jalapenos, they're the ultimate comfort food.",
                             image= 'https://images.ctfassets.net/hhv516v5f7sj/1OjIcGeVKg5maT9j6dLt4r/9d5e392fad9efa33f0903e7dcb0e521f/chilicheesefries_1000x1000.jpg')
    truffle_fries = PotatoDish(name='Truffle Fries', base='Fries',  topping='Truffle', price=7.99, 
                             description="Elevate your fries game with our truffle fries. Thin-cut potatoes fried until crispy and then tossed in truffle oil and Parmesan cheese, resulting in a rich and flavorful dish that's perfect for a special occasion.",
                             image= 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-08-Truffle-Fries%2FKitchnKitchn3580-1_01')
    garlic_parm_fries = PotatoDish(name='Garlic Parmigiana Fries',  base='Fries', topping='Garlic Parmigiana', price=8.99,
                             description="Our crispy fries tossed in garlic-infused olive oil and grated Parmesan cheese are a true delight for the senses. The aroma alone is enough to make your mouth water, and the flavor is simply irresistible.",
                             image='https://www.foodiecrush.com/wp-content/uploads/2018/04/Killer-Rosemary-Garlic-Fries-foodiecrush.com-010.jpg')



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
    with app.app_context():
        print("Starting seed...")
        seed_data()



