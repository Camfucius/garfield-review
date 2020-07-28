class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body

  belongs_to :user
  belongs_to :product
end
