require './stack'

def infix_to_postfix(expression)
  prec = {
      '*' => 3,
      '/' => 3,
      '+' => 2,
      '-' => 2,
      '(' => 1,
  }

  expression = expression.split ''

  operator_stack = Stack.new
  result_stack = Stack.new

  expression.each do |item|

    if '0123456789'.index item
      result_stack.push item
    elsif item == '('
      operator_stack.push item
    elsif item == ')'
      until operator_stack.empty?
        old = operator_stack.pop
        if old != '('
          result_stack.push old
        else
          break
        end
      end
    else
      until operator_stack.empty?
        if prec[operator_stack.peek] >= prec[item]
          result_stack.push operator_stack.pop
        else
          break
        end
      end
      operator_stack.push item
    end
  end

  until operator_stack.empty?
    result_stack.push operator_stack.pop
  end

  result_ary = []

  until result_stack.empty?
    result_ary.unshift result_stack.pop
  end

  result_ary

end

def calc_postfix(expression)
  expression = expression.split ''

  stack = Stack.new

  expression.each do |item|
    if '0123456789'.index item
      stack.push item.to_f
    else
      operand1 = stack.pop
      operand2 = stack.pop
      result = 0
      case item
        when '+'
          result = operand1 + operand2
        when '-'
          result = operand1 - operand2
        when '*'
          result = operand1 * operand2
        when '/'
          result = operand1 / operand2
        else
          # nothing to do
      end
      stack.push result
    end
  end

  stack.pop

end

def infix_to_prefix(expression)
  prec = {
      '*' => 3,
      '/' => 3,
      '+' => 2,
      '-' => 2,
      ')' => 1,
  }

  expression = expression.split('').reverse!

  operator_stack = Stack.new
  result_stack = Stack.new

  expression.each do |item|

    if '0123456789'.index item
      result_stack.push item
    elsif item == ')'
      operator_stack.push item
    elsif item == '('
      until operator_stack.empty?
        old = operator_stack.pop
        if old != ')'
          result_stack.push old
        else
          break
        end
      end
    else
      until operator_stack.empty?
        if prec[operator_stack.peek] > prec[item]
          result_stack.push operator_stack.pop
        else
          break
        end
      end
      operator_stack.push item
    end
  end

  until operator_stack.empty?
    result_stack.push operator_stack.pop
  end

  result_ary = []

  until result_stack.empty?
    result_ary.push result_stack.pop
  end

  result_ary

end

def calc_prefix(expression)
  expression = expression.split('').reverse!

  stack = Stack.new

  expression.each do |item|
    if '0123456789'.index item
      stack.push item.to_f
    else
      operand1 = stack.pop
      operand2 = stack.pop
      result = 0
      case item
        when '+'
          result = operand1 + operand2
        when '-'
          result = operand1 - operand2
        when '*'
          result = operand1 * operand2
        when '/'
          result = operand1 / operand2
        else
          # nothing to do
      end
      stack.push result
    end
  end

  stack.pop
end

def main
  print '请输入表达式: '
  expression = gets.chomp

  result = infix_to_postfix expression
  puts "后缀表达式: #{result.join}"
  puts "后缀表达式求值结果: #{calc_postfix result.join}"

  result = infix_to_prefix expression
  puts "前缀表达式: #{result.join}"
  puts "前缀表达式求值结果: #{calc_prefix result.join}"

end

main