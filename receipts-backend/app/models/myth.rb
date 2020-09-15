class Myth < ApplicationRecord
    belongs_to :fact
    validates :false_content, presence: true
end
