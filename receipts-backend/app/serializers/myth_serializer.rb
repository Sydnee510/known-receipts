class MythSerializer < ActiveModel::Serializer
  attributes :id, :false_content
  has_many :facts
end
