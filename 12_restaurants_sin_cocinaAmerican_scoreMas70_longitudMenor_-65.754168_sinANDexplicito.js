db.restaurants.find({cuisine:{$ne:"American"},grades:{$elemMatch:{score:{$gt:70}}},"address.coord":{$lt:-65.754168}}).pretty()