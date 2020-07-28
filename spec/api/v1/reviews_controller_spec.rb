require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "GET#Index" do
    let!(:user1) {FactoryBot.create(:user)}
    let!(:product1){Product.create(name:"Garfield Mmm lasagna teeshirt",description:"100% fun with a cotton backing", url:"https://www.amazon.com", image_url:"https://www.amazon.com")}
    let!(:review1) {Review.create(rating: 5, body:"This is a good product", product: product1, user: user1)}
    let!(:review2) {Review.create(rating: 4, body:"nice product", product: product1, user: user1)}

    it "returns a status of 200" do
      get :index, params: { product_id: product1.id, id: review1.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all the reviews of the product in the database" do
      get :index, params: {product_id: product1.id, id: review1.id}
      returned_json = JSON.parse(response.body)
      
      expect(returned_json[0]["rating"]).to eq(review1.rating)
      expect(returned_json[0]["body"]).to eq(review1.body)
      expect(returned_json[0]["username"]["username"]).to eq(review1.user.username)

      expect(returned_json[1]["rating"]).to eq(review2.rating)
      expect(returned_json[1]["body"]).to eq(review2.body)
      expect(returned_json[1]["username"]["username"]).to eq(review2.user.username)
    end


end