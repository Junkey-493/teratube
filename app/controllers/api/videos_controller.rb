class Api::VideosController < ApplicationController
  def index
    # ajaxで送られてくる最後のメッセージのid番号を変数に代入
    last_video_id = params[:id].to_i
    # 取得したグループでのメッセージ達から、idがlast_message_idよりも新しい(大きい)メッセージ達のみを取得
    @messages = Video.includes(:user).where("id > #{last_video_id}")
  end
end