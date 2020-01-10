class VideosController < ApplicationController
  before_action :find_video, only: [:show]
  before_action :move_to_index, except: [:index, :show]

  def index
    @videos = Video.all.order(created_at: :DESC)
  end

  def new
    @video = Video.new
  end

  def create
    Video.create(video_params)
    redirect_to root_path
  end

  def show
  end

  private

  def video_params
    params.require(:video).permit(:title, :video, :image).merge(user_id: current_user.id)
  end
  
  def find_video
    @video = Video.find(params[:id])
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
