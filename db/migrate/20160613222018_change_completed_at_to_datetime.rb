class ChangeCompletedAtToDatetime < ActiveRecord::Migration
  def up
    remove_column :todo_items, :completed_at, :date
    add_column :todo_items, :completed_at, :datetime
  end
  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
