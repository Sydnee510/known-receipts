class FactsController < ApplicationController
   
    before_action :set_myth
   
    def index
            @facts = Fact.all 
        render json: @facts
    end

    def create 
        @fact = @fact.myths.new(fact_params)
        @fact = Fact.new(fact_params)
        if @fact.save 
            render json: @fact
        else
            render json: {error: 'Error creating Fact'}
        end
    end 

    def show 
        @fact = Fact.find(params[:id])
        render json: @fact
    end

    private

    def set_myth
        @myth = Myth.find(params[:myth_id])
    end 

    def fact_params 
        params.require(:fact).permit(:true_content, :receipt_url, :myth_id)
    end
end
