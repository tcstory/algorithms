class Node
  def initialize(val = nil)
    @val = val
    @next = nil
  end

  attr_accessor :val
  attr_accessor :next
end