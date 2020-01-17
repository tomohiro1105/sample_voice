Rails.application.routes.draw do
  get 'home/index'
  # devise_for :users
  root 'home#index'
  resources :home, onry: [:index, :new, :create, :edit] do
    collection do
      get :word_register
    end
  end 
end
