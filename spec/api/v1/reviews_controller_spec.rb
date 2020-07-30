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
end