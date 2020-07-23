class Api::V1::ProductsController < ApiController
  # protect_from_forgery unless: -> { request.format.json? }

  def show
      #binding.pry
      @products = Product.find(params[:id])
  end

  def create
    new_product = Product.new(product_params)
    if new_product.save
      render json: new_product
    else
      render json: {errors: new_product.errors.full_messages}
    end
  end

  private
  def product_params
    params.require(:product).permit(:name, :url, :image_url, :description)
  end

end
