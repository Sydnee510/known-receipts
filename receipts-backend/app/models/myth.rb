class Myth < ApplicationRecord
    has_many :facts, dependent: :destroy
    validates :false_content, presence: true
end
