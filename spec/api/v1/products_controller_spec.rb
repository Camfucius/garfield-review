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

      expect(returned_json[0]["name"]).to eq(product1.name) 
      expect(returned_json[0]["image_url"]).to eq(product1.image_url)

      expect(returned_json[1]["name"]).to eq(product2.name)
      expect(returned_json[1]["image_url"]).to eq(product2.image_url)
    end
  end 
  
  describe "GET#Show" do
    let!(:product1) {FactoryBot.create(:product)}

    it "returns a status of 200" do 
      get :show, params: { id: product1.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "returns json of /products/:id" do
      get :show, params: { id: product1.id }
      returned_json = JSON.parse(response.body)    
        
      expect(returned_json["name"]).to eq(product1.name) 
      expect(returned_json["url"]).to eq(product1.url)
      expect(returned_json["description"]).to eq(product1.description) 
      expect(returned_json["image_url"]).to eq(product1.image_url) 
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

        expect(returned_json["name"]).to eq("garfield t-shirt")
        expect(returned_json["description"]).to eq("100% fun with a cotton backing")
        expect(returned_json["url"]).to eq("https://www.amazon.com")
        expect(returned_json["image_url"]).to eq("https://www.amazon.com")
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
  describe "DELETE#Destroy" do
    let!(:user1) {FactoryBot.create(:user)}
    let!(:product1){Product.create(name:"Garfield Mmm lasagna teeshirt",description:"100% fun with a cotton backing", url:"https://www.amazon.com", image_url:"https://www.amazon.com")}
    let!(:review1) {Review.create(rating: 5, body:"This is a good product", product: product1, user: user1)}
    let!(:review2) {Review.create(rating: 4, body:"nice product", product: product1, user: user1)}

    context "when a request with the correct params is made" do
      it "remove a review from the database" do
        previous_count = product1.reviews.count

        delete :destroy, params: { product_id: product1.id, id: review1.id}
        new_count = product1.reviews.count

        expect(response.status).to eq 200
        expect(response.content_type).to eq "application/json"

        expect(new_count).to eq(previous_count - 1)
      end
    end
  end
end
