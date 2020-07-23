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
      # binding.pry

      expect(returned_json[0]["name"]).to eq(product1.name)
      expect(returned_json[0]["description"]).to eq(product1.description)
      expect(returned_json[0]["url"]).to eq(product1.url)
      expect(returned_json[0]["image_url"]).to eq(product1.image_url)

      expect(returned_json[1]["name"]).to eq(product2.name)
      expect(returned_json[1]["description"]).to eq(product2.description)
      expect(returned_json[1]["url"]).to eq(product2.url)
      expect(returned_json[1]["image_url"]).to eq(product2.image_url)
    end
  end
end 