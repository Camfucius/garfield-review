require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
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