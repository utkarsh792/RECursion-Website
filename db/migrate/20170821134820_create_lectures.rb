class CreateLectures < ActiveRecord::Migration[5.0]
  def change
    create_table :lectures do |t|
      t.string :title
      t.text :description
      t.integer :likes
      t.date :held_on

      t.timestamps
    end
  end
end
