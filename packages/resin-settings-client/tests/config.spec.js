const m = require('mochainon')
const path = require('path')
const config = require('../build/config').default

describe('Config:', () => {

	describe('.paths', () => {

		describe('.user', () => {

			it('should be an absolute path', () => {
				const isAbsolute = config.paths.user === path.resolve(config.paths.user)
				return m.chai.expect(isAbsolute).to.be.true
			})

		})

		describe('.project', () => {

			it('should be an absolute path', () => {
				const isAbsolute = config.paths.project === path.resolve(config.paths.project)
				return m.chai.expect(isAbsolute).to.be.true
			})

		})

	})

})
