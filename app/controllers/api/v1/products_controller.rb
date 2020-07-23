class Api::V1::ProductsController < ApiController
  
  def index
    render json: Product.all
  end

end 