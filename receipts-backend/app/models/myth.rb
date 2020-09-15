class Myth < ApplicationRecord
    has_many :facts
    validates :false_content, presence: true
end
