class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: {}
        end
    end

    def update

    end

    def destroy

    end

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :password)
    end

end