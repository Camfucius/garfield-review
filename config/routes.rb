Rails.application.routes.draw do
  root 'products#index'
  devise_for :users
  
  get '/products/new', to: "homes#index"
  
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create]
    end 
  end 

end
