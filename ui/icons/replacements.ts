const color = (clr: string): Record<string, string> => ({
  [clr]: `{getColor(color) || '${clr}'}`,
})

export default {
  ArrowIcon: color('#32A4E4'),
}
