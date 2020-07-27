Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/products', to: "homes#index"
  get '/products/new', to: "homes#index"
  get '/products/:id', to: "homes#index"

  resources :products, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :new, :show]
    end
  end

end
