Rails.application.routes.draw do
  
  resources :group_friends
  resources :groups
  resources :friendships
  resources :friends
  resources :interactions
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
