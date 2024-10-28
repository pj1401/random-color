/**
 * @file The RGB class.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Data structure for rgb.
 */
export class RGB {
  #red
  #green
  #blue

  /**
   * Initialises the object.
   *
   * @param {number} red - The red value.
   * @param {number} green - The green value.
   * @param {number} blue - The blue value.
   */
  constructor (red, green, blue) {
    this.red = red
    this.green = green
    this.blue = blue
  }

  /**
   * Get the red value.
   *
   * @returns {number} The red value.
   */
  get red () {
    return this.#red
  }

  /**
   * Set the red value.
   */
  set red (red) {
    this.#checkNumberRange(red)
    this.#red = red
  }

  /**
   * Get the green value.
   *
   * @returns {number} The green value.
   */
  get green () {
    return this.#green
  }

  /**
   * Set the green value.
   */
  set green (green) {
    this.#checkNumberRange(green)
    this.#green = green
  }

  /**
   * Get the blue value.
   *
   * @returns {number} The blue value.
   */
  get blue () {
    return this.#blue
  }

  /**
   * Set the blue value.
   */
  set blue (blue) {
    this.#checkNumberRange(blue)
    this.#blue = blue
  }

  /**
   * Validate the number.
   *
   * @param {number} value - The number to test.
   * @throws {RangeError} The value must be between 0 and 255.
   */
  #checkNumberRange (value) {
    if (this.#valueOutOfRange(value)) {
      throw RangeError('The value must be between 0 and 255.')
    }
  }

  /**
   * Return True if a number is not between 0 and 255.
   *
   * @param {number} value - The number to test.
   * @returns {boolean} False if the number is between 0 and 255.
   */
  #valueOutOfRange (value) {
    return value < 0 || value > 255
  }
}
