Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/auth', to: 'users#show'
  get '/users/:id', to: 'users#show'
  patch '/users', to: 'users#update'

  resources :group_friends
  resources :groups, only: %i[index create update destroy]
  resources :friendships
  resources :friends
  resources :interactions

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
