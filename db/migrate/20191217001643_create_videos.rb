class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.binary :video, null: false
      t.binary :image
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
