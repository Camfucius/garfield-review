class Api::V1::ProductsController < ApiController
  def index
    render json: Product.all
  end

  def show
    render json: { product: Product.find(params[:id]) }
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
