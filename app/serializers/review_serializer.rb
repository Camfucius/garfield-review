class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :commenter_names

  def commenter_name
    object.user.username
  end   
end
