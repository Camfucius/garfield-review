class Api::V1::ProductsController < ApplicationController
   
  def show
      #binding.pry
      @products = Product.find(params[:id])
  end
end