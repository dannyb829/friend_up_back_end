class CreateInteractions < ActiveRecord::Migration[6.1]
  def change
    create_table :interactions do |t|

      t.timestamps
    end
  end
end
