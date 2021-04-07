class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :gender, null: false
      t.string :birthday
      t.string :bio
      t.string :education
      t.string :hometown
      t.string :relationship
      t.string :websites
      t.string :social_links
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
