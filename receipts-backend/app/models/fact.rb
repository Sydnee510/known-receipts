class Fact < ApplicationRecord
    has_many :myths
    validates :true_content, :receipt_url, presence: true
end
