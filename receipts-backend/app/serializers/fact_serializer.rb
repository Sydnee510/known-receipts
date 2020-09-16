class FactSerializer < ActiveModel::Serializer
  attributes :id, :true_content, :receipt_url, :myth_id
end
