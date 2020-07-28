class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :image_url
end
