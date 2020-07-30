# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product1 = Product.create(name: "Garfield Mmm lasagna teeshirt", url: "https://www.amazon.com/Garfield-Mmm-Lasagna/dp/B07KWRXSLC/ref=sr_1_6_sspa?dchild=1&keywords=garfield&qid=1595352489&sr=8-6-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRVo3MFkyNEkwWFo1JmVuY3J5cHRlZElkPUEwNDEzNzI3R1o4QlQ1VzBNNVhZJmVuY3J5cHRlZEFkSWQ9QTAxMzM1MjIyTzdFWUM0SUZEVlpDJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==)", description: "100% fun with a cotton backing", image_url: "https://m.media-amazon.com/images/I/B1DnWZEQ8ES._AC_CLa%7C2140%2C2000%7C91oOwyHsCDL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX679_.png")

product2 = Product.create(name: "Garfield expression collage", url: "https://www.amazon.com/Garfield-Expressions-Collage/dp/B07KW1HYDK/ref=sr_1_11_sspa?dchild=1&keywords=garfield&qid=1595354518&sr=8-11-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFVS1M5UTZVOUsxOFUmZW5jcnlwdGVkSWQ9QTA3MDk4MjJZREpZUkJCTE9TWlYmZW5jcnlwdGVkQWRJZD1BMDEzMzY0NjJFRFVBS0NCUFZQVDEmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl", description: "Imported directly from Muncie Indiana, another cotton shirt that is 100% fun!", image_url: "https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C91apYihsNzL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0._UX679_.png")


user1 = User.create(email: "123@gmail.com", password: "password", username:"Robert", first_name: "Rebert", last_name: "Ward")
user2 = User.create(email: "456@yahoo.com", password: "12345", username:"Ellen", first_name: "Ellen", last_name: "Acevedo")

review1 = Review.create(rating: -1, body: "this is a good product", product_id: product1.id, user_id: user1.id)
review2 = Review.create(rating: 1, body: "I am gonna buy it", product_id: product2.id, user_id: user2.id)
review3 = Review.create(rating: 3, body: "this is a good product", product_id: product1.id, user_id: user1.id)
review4 = Review.create(rating: 5, body: "This is a good product", product_id: product1.id, user_id: user1.id)
review5 = Review.create(rating: 1, body: "I am gonna buy it", product_id: product2.id, user_id: user2.id)