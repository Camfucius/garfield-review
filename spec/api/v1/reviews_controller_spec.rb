require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do

  describe "POST#create" do
    let!(:user1){FactoryBot.create(:user)}
    let!(:product1) {FactoryBot.create(:product)}
    let!(:new_review_hash){{review:{
      rating: 2,
      body: "Awesome design on this shirt."
    }, product_id: product1.id}}
    let!(:bad_review_hash){{review:{
      body: "Awesome design on this shirt."
    }, product_id: product1.id}}

    it "creates a new review" do
      sign_in user1
      prev_count = Review.count
      post :create, params: new_review_hash, format: :json
      new_count = Review.count

      expect(new_count).to eq(prev_count + 1)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    end

    it "returns Json with new review information" do
      sign_in user1
      post :create, params: new_review_hash, format: :json
      returned_json = JSON.parse(response.body)

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["review"]["rating"]).to eq 2
      expect(returned_json["review"]["body"]).to eq "Awesome design on this shirt."
      expect(returned_json["review"]["commenter_name"]).to eq user1.username
    end

    it "if invalid form submission, returns the json" do
      sign_in user1
      post :create, params: bad_review_hash, format: :json
      returned_json = JSON.parse(response.body)

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["errors"][0]).to eq "Rating can't be blank"
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

        expect(response.status).to eq 204
        expect(new_count).to eq(previous_count - 1)
      end
    end
  end
end
