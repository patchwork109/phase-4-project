from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    serialize_rules = ('-dish_orders', )

    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    dish_orders = db.relationship('DishOrder', backref='order')
    potato_dishes = association_proxy('dish_orders', 'potato_dish')

    @validates('customer_name')
    def validate_customer_name(self, key, value):
        if not value:
            raise ValueError('Customer name is required')
        return value

    def add_dish(self, dish, quantity):
        dish_order = DishOrder(order=self, potato_dish=dish, quantity=quantity)
        db.session.add(dish_order)
        db.session.commit()

    def remove_dish(self, dish_order):
        db.session.delete(dish_order)
        db.session.commit()

    @property
    def cartTotal(self):
        total = 0
        for pd in self.potato_dishes:
            total += pd.price
        return total


class PotatoDish(db.Model, SerializerMixin):
    __tablename__ = 'potato_dishes'

    serialize_rules = ('-dish_orders', )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    base = db.Column(db.String)
    sauce = db.Column(db.String)
    topping = db.Column(db.String)
    price = db.Column(db.Float)
    description = db.Column(db.String)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    dish_orders = db.relationship('DishOrder', backref='potato_dish')
    orders = association_proxy('dish_orders', 'order')

    @validates('name', 'base', 'sauce', 'topping', 'price')
    def validate_fields(self, key, value):
        if not value:
            raise ValueError(f'{key} is required')
        return value



class DishOrder(db.Model, SerializerMixin):
    __tablename__ = 'dish_orders'

    serialize_rules = ('-order', '-potato_dish')

    id = db.Column(db.Integer, primary_key=True)
    note_to_chef = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    potato_dish_id = db.Column(db.Integer, db.ForeignKey('potato_dishes.id'))
    

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email=db.Column(db.String)


    def __repr__(self):
        return f'User {self.username}, ID {self.id}'
