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

  def create 
    binding.pry
    product = Product.find(params[:product_id])
    new_review = Review.new(review_params)
    new_review.product = product
    user = current_user
    new_review.user = user
    
    if new_review.save
      render json: new_review 
    else
      render json: {errors: new_review.errors.full_messages}
    end
  end


  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end

end