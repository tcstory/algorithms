require '../chapter1/binary_search'
require 'benchmark'

content = File.read './largeW.txt'
whitelist = content.split( /\n/ ).map{|item| item.to_i}.sort

content = File.read './largeT.txt'
list = content.split( /\n/ ).map{|item| item.to_i}.sort

not_found = []

list.each do |item|
  result = binary_search whitelist, 0, whitelist.length - 1, item
  if result == -1
    not_found.push item
  end
end

puts not_found

