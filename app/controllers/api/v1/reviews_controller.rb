class Api::V1::ReviewsController < ApiController
  skip_before_action :verify_authenticity_token
  def index
    product = Product.find(params[:product_id])
    reviews = product.reviews
    reviewwithuser = []
    reviews.each do |review| 
      newreview = {rating: review.rating,
      body: review.body,
      username: User.find(review.user_id),
      id: review.id
      }
    reviewwithuser << newreview
    end
    render json: reviewwithuser
  end

  def destroy
    # binding.pry
    @review = Review.find(destroy_review_params)
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end

  def destroy_review_params
    params.require(:id)
  end
end