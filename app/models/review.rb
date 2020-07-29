class Review < ApplicationRecord
  validates :rating, presence: true

  belongs_to :product
  belongs_to :user

end