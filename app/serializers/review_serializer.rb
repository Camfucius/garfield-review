class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :commenter_name, :vote_count

  def commenter_name
    object.user.username
  end
end
