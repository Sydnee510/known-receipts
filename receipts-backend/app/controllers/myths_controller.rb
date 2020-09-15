class MythsController < ApplicationController
    def index
        @myths = Myth.all
        render json: @myths
    end 

    def create 
        @myth = Myth.new(myth_params)
        if @myth.save 
            render json: @myth
        else
            render json: {error: 'Error creating Myth'}
        end
    end 

    def show 
        @myth = Myth.find(params[:id])
        render json: @myth
    end

    def destroy 
        @myth = Myth.find(params[:id])
        @myth.destroy
    end 

    private

    def myth_params 
        params.require(:myth).permit(:false_content)
    end
end
