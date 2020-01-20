json.array! @videos do |video|
  json.image video.image_url.to_s
  json.title video.title
  json.nickname video.user.nickname
  json.impressionist_count video.impressionist_count
  json.created_at time_ago_in_words(video.created_at)
  json.id video.id
end