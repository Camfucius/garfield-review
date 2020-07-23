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
    img_url { '' }
  end
end
