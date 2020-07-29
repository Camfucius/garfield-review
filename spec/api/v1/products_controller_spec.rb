require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
  describe "GET#Index" do
    let!(:product1) {FactoryBot.create(:product)}
    let!(:product2) {FactoryBot.create(:product)}

    it "returns a status of 200" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns all the products in the database" do
      get :index

      returned_json = JSON.parse(response.body)

      expect(returned_json["products"][0]["name"]).to eq(product1.name) 
      expect(returned_json["products"][0]["image_url"]).to eq(product1.image_url)

      expect(returned_json["products"][1]["name"]).to eq(product2.name)
      expect(returned_json["products"][1]["image_url"]).to eq(product2.image_url)
    end
  end 
  
  describe "GET#Show" do
    let!(:user1){FactoryBot.create(:user)}
    let!(:product1) {FactoryBot.create(:product)}
    let!(:review1) {Review.create(rating: 1, body:"Awesome design on this shirt. It's a great gift for the Garfield fan in your life. My only concern is that it is a bit short in the length from neck to waste.", product: product1, user: user1)}
    let!(:review2) {Review.create(rating: 1, body:"My kid looked so cute for Thanksgiving in his Garfield tee!", product: product1, user: user1)}

    it "returns a status of 200" do 
      get :show, params: { id: product1.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns json of /products/:id" do
      get :show, params: { id: product1.id }
      returned_json = JSON.parse(response.body)  

      binding.pry        
      expect(returned_json["product"]["name"]).to eq(product1.name) 
      expect(returned_json["product"]["url"]).to eq(product1.url)
      expect(returned_json["product"]["description"]).to eq(product1.description) 
      expect(returned_json["product"]["image_url"]).to eq(product1.image_url) 
      expect(returned_json["product"]["reviews"][0]["rating"]).to eq(review1.rating)
      expect(returned_json["product"]["reviews"][0]["body"]).to eq(review1.body)
      expect(returned_json["product"]["reviews"][0]["commenter_name"]).to eq(user1.username)     
    end
  end 

  describe "POST#Create" do
    let!(:product_data) { {product: {name: "garfield t-shirt", url: "https://www.amazon.com", image_url:"https://www.amazon.com", description: "100% fun with a cotton backing"}} }
    let!(:bad_product_data) { {product: {url:"https://www.amazon.com", image_url:"https://www.amazon.com", description:"100% fun with a cotton backing"}} }

    context "when a request with the correct params is made" do
      it "adds a new product to the database" do
        previous_count = Product.count

        post :create, params: product_data
        new_count = Product.count

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"

        expect(new_count).to eq(previous_count + 1)
      end

      it "returns the newley added product as a json object" do
        post :create, params: product_data

        returned_json = JSON.parse(response.body)
        
        expect(returned_json["product"]["name"]).to eq("garfield t-shirt")
        expect(returned_json["product"]["description"]).to eq("100% fun with a cotton backing")
        expect(returned_json["product"]["url"]).to eq("https://www.amazon.com")
        expect(returned_json["product"]["image_url"]).to eq("https://www.amazon.com")
      end
    end

    context "when a bad request is made" do

      it "should not add the product to the database" do
        previous_count = Product.count
        post :create, params: bad_product_data
        new_count = Product.count
        expect(previous_count).to eq(new_count)
      end

      it "returns an error message" do
        post :create, params: bad_product_data
        returned_json = JSON.parse(response.body)
        expect(returned_json["errors"][0]).to eq("Name can't be blank")
      end
    end
  end
end
