class VideosController < ApplicationController
  before_action :find_video, only: [:show]
  before_action :move_to_index, except: [:index, :show]

  def index
    @videos = Video.all.order(created_at: :DESC)
  end

  def new
  end

  def create
  end

  def show
  end

  private

  def find_video
    @video = Video.find(params[:id])
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
