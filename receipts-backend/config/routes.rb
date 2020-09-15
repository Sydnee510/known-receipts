Rails.application.routes.draw do
  resources :myths do 
    resources :facts 
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
