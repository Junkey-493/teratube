Rails.application.routes.draw do
  root "videos#index"
  devise_for :users
  resources :videos
  namespace :api do
    resources :videos, only: :index, defaults: { format: 'json'}
  end
end
