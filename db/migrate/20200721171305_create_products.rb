class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.text :description, null: false
      t.string :image_url

      t.timestamps
    end
  end
end
