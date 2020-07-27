class Api::V1::ReviewsController < ApiController
  def index
    product = Product.find(params[:product_id])
    reviews = product.reviews
    reviewwithuser = []
    reviews.each do |review| 
      newreview = {rating: review.rating,
      body: review.body,
      username: User.find(review.user_id)
      }
    reviewwithuser << newreview
    end
    render json: reviewwithuser
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end

end