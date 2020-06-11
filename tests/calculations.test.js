const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../calculation')

describe('Calculation', () => {
  describe('strictEqual', () => {
    it('strictEqual returns true of same numbers in the array', () => {
      const nums = [4, 4]
      const total = strictEqual(nums)

      expect(total).to.equal(true)
    })

    it('strictEqual returns false of different numbers in the array', () => {
      const nums = [4, 6]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns false of +ve and -ve numbers in the array', () => {
      const nums = [-4, 6]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns true of -ve and -ve same numbers in the array', () => {
      const nums = [-4, -4]
      const total = strictEqual(nums)

      expect(total).to.equal(true)
    })

    it('strictEqual returns false of -ve and -ve different numbers in the array', () => {
      const nums = [-6, -4]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns true of same strings in the array', () => {
      const nums = ['A', 'A']
      const total = strictEqual(nums)

      expect(total).to.equal(true)
    })

    it('strictEqual returns false of different strings in the array', () => {
      const nums = ['A', 'B']
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns false of number and string in the array', () => {
      const nums = [5, '5']
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns false of string and number in the array', () => {
      const nums = ['5', 5]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns false of NaN and number in the array', () => {
      const nums = [NaN, 5]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns true of null and null in the array', () => {
      const nums = [null, null]
      const total = strictEqual(nums)

      expect(total).to.equal(true)
    })

    it('strictEqual returns false of [] and [] in the array', () => {
      const nums = [[], []]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })

    it('strictEqual returns true of same object1  in the array', () => {
      let obj1 = { a: 4 }
      const nums = [obj1, obj1]
      const total = strictEqual(nums)

      expect(total).to.equal(true)
    })

    it('strictEqual returns false of different object1 and object2 in the array', () => {
      let obj1 = { a: 4 }
      let obj2 = { a: 4 }
      const nums = [obj1, obj2]
      const total = strictEqual(nums)

      expect(total).to.equal(false)
    })
  })
})
