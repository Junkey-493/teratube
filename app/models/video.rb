class Video < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  has_one_attached :video
  validates :title, :video, presence: true
  is_impressionable
end
