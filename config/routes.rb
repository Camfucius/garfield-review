Rails.application.routes.draw do
  root 'products#index'
  devise_for :users
  
  get '/products/new', to: "homes#index"
  
  get '/products/:id', to: "homes#index"
  # I don't think this is actually using React
  resources :products, only: [:index]
  
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :new, :show]
    end 
  end 

end
