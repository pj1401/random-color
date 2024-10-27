/**
 * @file The RandomColor class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import Color from './Color.js'
import { RGB } from './RGB.js'

/**
 * Represents a random color.
 */
export default class RandomColor extends Color {
  /**
   * Initialises the RandomColor object.
   */
  constructor () {
    super(0, 0, 0)
    this.randomize()
  }

  /**
   * Randomizes the color.
   */
  randomize () {
    const red = this.#getRandomRGBvalue()
    const green = this.#getRandomRGBvalue()
    const blue = this.#getRandomRGBvalue()
    this.changeColor(new RGB(red, green, blue))
  }

  /**
   * Get a random value [0, 255].
   *
   * @returns {number} A number between 0 and 255.
   */
  #getRandomRGBvalue () {
    /**
     * See @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
     */
    const min = 0
    const max = 255
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
