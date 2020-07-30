class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :user_vote, null: false, default: 0

      t.belongs_to :user
      t.belongs_to :review
    end
  end
end
