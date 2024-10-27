/**
 * @file Tests for the RGB.js file.
 * @module test/RGB.test.js
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { RGB } from '../src/RGB.js'

describe('exceptions', () => {
  test('Number is out of range [0, 255]', () => {
    expect(() => new RGB(256, 256, 256)).toThrow(Error)
  })

  test('Changing value to out of range', () => {
    const rgb = new RGB(0, 0, 255)
    expect(() => { rgb.red = -1 }).toThrow(Error)
  })
})
