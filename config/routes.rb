Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'hello_world#index'
  get '/hello_world', to: 'hello_world#index'
end
