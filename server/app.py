#!/usr/bin/env python3

from flask import request, make_response, session
from flask_restful import Resource
from config import app, db, api
from models import Order, PotatoDish, DishOrder, User
from flask_cors import CORS
from flask_session import Session
CORS(app, supports_credentials=True, allow_headers=['Content-Type', 'session'])
Session(app)
app.secret_key = b'\x9d\xe0\x0e\t2\xd7s\x0c\xcc&\xe8\x84'








class Home(Resource):
    def get(self):
        return make_response({"message":" Remarkable Dream Team QUEENS <3 "})

class PotatoDishes(Resource):
    def get(self):
        menu_items = [p.to_dict() for p in PotatoDish.query.all()]
        return make_response(menu_items, 200)

class OrderById(Resource):
    def get(self, id):
        order = Order.query.filter_by(id=id).first()
        if not order:
            return make_response({"error":"Order not found"}, 404)
        return make_response(order.to_dict(rules=('potato_dishes','dish_orders', 'dish_orders.potato_dish', 'cartTotal')), 200)

    def delete(self, id):
        order = Order.query.filter_by(id=id).first()
        if not order:
            return make_response({"error":"Order not found"}, 404)
        
        try:
            db.session.delete(order)
            db.session.commit()
        except:
            return make_response({"error":"Validation error"}, 400)
        
        return make_response({}, 204)
    
    def patch(self, id):
        order = Order.query.filter_by(id=id).first()
        if not order:
            return make_response({"error":"Order not found"}, 404)
        
        data = request.get_json()
        try:
            for key in data.keys():
                setattr(order, key, data[key])
        except:
            return make_response({"error":"Validation Error - could not update order"}, 400)
        
        try:
            db.session.add(order)
            db.session.commit()
        except:
            return make_response({"error":"Validation Error - could not update database"}, 400)
        return make_response(order.to_dict(), 200)

class DishOrders(Resource):
    def get(self):
        dish_orders = [d.to_dict() for d in DishOrder.query.all()]
        return make_response(dish_orders,200)
    
    def post(self):
        data=request.get_json()

        try:
            new_dish_order = DishOrder(
                order_id=data['order_id'],
                potato_dish_id=data['potato_dish_id'],
                note_to_chef=''
            )
        except:
            return make_response({"error":"Validation error, unable to POST"}, 400)
        
        try:
            db.session.add(new_dish_order)
            db.session.commit()
        except:
            return make_response({"error":"Validation error, unable to save to database"}, 400)
        
        return make_response(new_dish_order.to_dict(), 201)
        
class Orders(Resource):
    def post(self):
        data = request.get_json()

        order = Order(customer_name=data['customer_name'])

        try:
            db.session.add(order)
            db.session.commit()
        except:
            return make_response({"error": "Validation error"}, 400)

        return make_response(order.to_dict(), 201)


class DishOrderById(Resource):
    def get(self, id):
        dishorder = DishOrder.query.filter_by(id=id).first()
        if not dishorder:
            return make_response({"error":"Oh no, Dish order not found"}, 404) 
        return make_response(dishorder.to_dict(), 200)       

    def patch(self, id):
        dishorder = DishOrder.query.filter_by(id=id).first()
        if not dishorder:
            return make_response({"error":"Oh no, Dish order not found"}, 404)
        data = request.get_json()
        try:
            for key in data.keys():
                setattr(dishorder, key, data[key])
        except:
            return make_response({"error":"Validation Error, unable to complete request"}, 400)
        
        db.session.add(dishorder)
        db.session.commit()
        return make_response(dishorder.to_dict(rules=('potato_dish',)), 200)
    
    def delete(self, id):
        dishorder = DishOrder.query.filter_by(id=id).first()
        if not dishorder:
            return make_response({"error":"Oh no, Dish order not found"}, 404)
        
        db.session.delete(dishorder)
        db.session.commit()
        return make_response({"message": "Deleted successfully"}, 200)

class Users(Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User(
            username=form_json['username'],
            email=form_json['email']
        )
        db.session.add(new_user)
        db.session.commit()

        session['user_id'] = new_user.id
        return make_response(new_user.to_dict(), 201)

    
# CheckSession
@app.route('/currentuser')   
def current_user():
        current_user = User.query.filter(User.id == session.get('user_id')).first()
        if current_user:
            return make_response(current_user.to_dict(), 200) 
        return make_response({"message":"401: Not Authorized!"}, 401)    


class Login(Resource):
    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()
        if user:
            session['user_id'] = user.id
            return make_response(user.to_dict(), 200)
        return make_response({"message":"401: Not Authorized!"}, 401)

        

class Logout(Resource):
    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204



api.add_resource(Logout, '/logout')
api.add_resource(Home, '/' )
api.add_resource(PotatoDishes, '/potatodishes')
api.add_resource(OrderById, '/orders/<int:id>')
api.add_resource(DishOrders, '/dishorders')
api.add_resource(Orders, '/orders')
api.add_resource(DishOrderById, '/dishorders/<int:id>')
api.add_resource(Users, '/users')
api.add_resource(Login, '/login')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
