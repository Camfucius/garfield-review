class Api::V1::ReviewsController < ApiController
  def destroy
    @review = Review.find(review_params)
    @review.destroy
  end
  def update
    @reviews = Object.find(review_params)
      if @reviews.update_attributes(params[:vote_count])
        flash[:success] = "Object was successfully updated"
      else
        flash[:error] = "Something went wrong"
        render 'edit'
      end
  end
  
  private
  def review_params

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