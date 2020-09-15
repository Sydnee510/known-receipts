class Fact < ApplicationRecord
    belongs_to :myth
    validates :true_content, :receipt_url, presence: true
end
