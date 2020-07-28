class Api::V1::ReviewsController < ApiController
  
  def index
    product = Product.find(params[:product_id])
    reviews = product.reviews
    
    render json: reviews, each_serializer: ReviewSerializer
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end

end