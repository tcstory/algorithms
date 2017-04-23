require './node'

class Queue

  def initialize
    @first = nil
    @last = nil
    @n = 0
  end

  def empty?
    @n == 0
  end

  def size
    @n
  end

  def enqueue(val)
    old = @last
    @last = Node.new val
    @last.next = old

    if self.empty?
      @first = @last
    else
      old.next = @last
    end

    @n += 1
  end

  def dequeue
    unless self.empty?
      old = @first
      @first = old.next
      @n -= 1

      if self.empty?
        @last = nil
      end

      old.val
    end
  end

  def to_s
    if @n == 0
      "HEAD [] TAIL"
    else
      pointer = @first
      result = []

      while pointer
        result.push pointer.val
        if pointer == @last
          break
        else
          pointer = pointer.next
        end
      end

      "HEAD [#{result.join ','}] TAIL"
    end
  end

end