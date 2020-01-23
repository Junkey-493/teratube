Rails.application.routes.draw do
  root "videos#index"
  devise_for :users
  resources :videos
end
