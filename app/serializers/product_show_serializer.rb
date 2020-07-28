class ProductShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :image_url

  has_many :reviews
end
