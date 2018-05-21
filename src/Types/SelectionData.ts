type SelectionData = Array<{
  label: string | number
  value: string | number
  children?: SelectionData
  [others: string]: any
}>

export default SelectionData
