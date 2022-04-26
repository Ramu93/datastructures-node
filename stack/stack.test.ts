import {isBalanced} from "./isBalanced";

describe('Stack', () => {
  it('{} - should return true', () => {
      expect(isBalanced('{}')).toBeTruthy()
  })

  it('{ - should return false', () => {
    expect(isBalanced('{')).toBeFalsy()
  })

  it('{) - should return false', () => {
    expect(isBalanced('{)')).toBeFalsy()
  })

  it('{{}} - should return true', () => {
    expect(isBalanced('{{}}')).toBeTruthy()
  })

  it('{{}}} - should return false', () => {
    expect(isBalanced('{{}}}')).toBeFalsy()
  })

  it('{[]} - should return true', () => {
    expect(isBalanced('{[]}')).toBeTruthy()
  })

  it('([}) - should return false', () => {
    expect(isBalanced('([})')).toBeFalsy()
  })

  it('[{()}] - should return true', () => {
    expect(isBalanced('[{()}]')).toBeTruthy()
  })

  it('[{())] - should return false', () => {
    expect(isBalanced('[{())]')).toBeFalsy()
  })

  it('{[({})]} - should return true', () => {
    expect(isBalanced('{[({})]}')).toBeTruthy()
  })

  it('{[({})] - should return false', () => {
    expect(isBalanced('{[({})]')).toBeFalsy()
  })
})

