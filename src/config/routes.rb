Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"
  resources :users, only: [:index] do
    member do
      get :mypage
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
