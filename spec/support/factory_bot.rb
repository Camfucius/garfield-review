require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    first_name { 'first_name' }
    last_name { 'last_name' }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :product do
    name {'name'}
    url { 'www.example.com' }
    image_url { 'www.example.com' }
    description{'This is a good product'}
  end
end
