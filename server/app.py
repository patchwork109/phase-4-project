#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Order, PotatoDish, DishOrder 

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
        return make_response(order.to_dict(), 200)

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




    


api.add_resource(Home, '/' )
api.add_resource(PotatoDishes, '/potatodishes')
api.add_resource(OrderById, '/orders/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
