class HelloWorldController < ApplicationController
    def index
       render component: 'HelloWorld', props: { greeting: "Hello from react-rails." }'
    end
end
