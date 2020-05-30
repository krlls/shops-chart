const getMaxItem = (arr) => {
  const values = arr.map((item) => item.value)
  return Math.max.apply(null, values)
}

export const tooltipPosition = (point, params, dom, rect, size, option) => {
  const { viewSize, contentSize } = size
  const { data } = option.series[0]
  const currentItem = data[params[0].dataIndex].value
  const maxItem = getMaxItem(data)
  let x = 0
  let y = 0

  x = ((viewSize[0] - 12) / (data.length - 1)) * params[0].dataIndex - (contentSize[0] / 2) + 6
  y = ((contentSize[1] / 100) * ((currentItem / maxItem) * 100))
  y = contentSize[1] - y

  if (y < 0) {
    y = 0
  }

  if (x < 6) {
    x = 6
  } else if (x > (viewSize[0] - 6 - contentSize[0])) {
    x = viewSize[0] - 6 - contentSize[0] + 1
  }

  return [x, y]
}

export const dataToDate = (demoData) => demoData.map((item) => item.date)
