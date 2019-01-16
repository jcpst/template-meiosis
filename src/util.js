export function convert(value, to) {
  return Math.round(to === 'C' ? ((value - 32) / 9) * 5 : (value * 9) / 5 + 32)
}

export function flipUnits(unit) {
  return unit === 'C' ? 'F' : 'C'
}
