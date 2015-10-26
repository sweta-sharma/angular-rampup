class UsersController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params["id"])
    render json: user
  end

  def destroy
    user = User.find(params["id"])
    User.delete(user)
    users = User.all
    render json: users
  end

  def create
    user = User.create(params["user"])

    if user.save
      users = User.all
      render json: users
    end
  end

  def update
    user = User.find(params["id"])
    user.update_attributes(params["user"])
    if user.save
      users = User.all
      render json: users
    end
  end

end
