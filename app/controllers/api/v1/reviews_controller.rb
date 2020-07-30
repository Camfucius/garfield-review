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
    params.require(:id)
  end
end