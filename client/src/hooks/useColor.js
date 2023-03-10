/**
 * Returns a random element from from the `colors` array
 * @param {string[]} color An array containing hexadecimal codes
 * @returns {string} Color in hexadecimal code
 */
export default function useColor (
  colors = ['#c52c2c', '#575050', '#1f3286', '#128897', '#12972f']
) {
  if (!Array.isArray(colors)) {
    throw new Error("'useColor' only accepts an array as an argument")
  }

  if (colors.length === 0) {
    throw new Error('Array must contain at least one element')
  }

  const isHexColor = (str) => {
    return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(str)
  }

  colors.forEach((color) => {
    if (!isHexColor(color)) {
      throw new Error('Array must only contain hexadecimal codes')
    }
  })

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return { randomColor }
}
