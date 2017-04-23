def binary_search(arr, low, high, target)
  if low > high
    return -1;
  end

  mid = (low + high) / 2

  if target > arr[mid]
    binary_search arr, mid+1, high, target
  elsif target < arr[mid]
    binary_search arr, low, mid-1, target
  else
    arr[mid]
  end

end

