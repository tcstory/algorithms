require "./node"

class Stack
  def initialize
    @top = nil
    @n = 0
  end

  def empty?
    @n == 0
  end

  def size
    @n
  end

  def push(val)
    old = @top
    @top = Node.new val
    @top.next = old
    @n += 1
  end

  def pop
    unless self.empty?
      old = @top
      @top = old.next
      @n -= 1
      old.val
    end
  end

  def peek
    unless @top == nil
      @top.val
    end
  end

  def to_s
    if @n == 0
      "BOTTOM [] TOP"
    else
      pointer = @top
      result = []
      while pointer
        result.unshift pointer.val
        pointer = pointer.next
      end
      "BOTTOM [#{result.join ','}] TOP"
    end
  end

end