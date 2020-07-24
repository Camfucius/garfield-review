class Product < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true
  validates :description, presence: true
  
  has_many :reviews
end