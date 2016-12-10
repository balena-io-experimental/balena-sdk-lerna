const m = require('mochainon')
const path = require('path')
const url = require('url')
const utils = require('../build/utils')
const defaults = require('../build/defaults').default

describe('Defaults:', () => {

	describe('.resinUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'resinUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should not contain a protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'resinUrl')
			return m.chai.expect(url.parse(setting).protocol).to.not.exist
		})
	})

	describe('.apiUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'apiUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should contain an https protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'apiUrl')
			return m.chai.expect(url.parse(setting).protocol).to.equal('https:')
		})
	})

	describe('.vpnUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'vpnUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should not contain a protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'vpnUrl')
			return m.chai.expect(url.parse(setting).protocol).to.not.exist
		})
	})

	describe('.registryUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'registryUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should not contain a protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'registryUrl')
			m.chai.expect(url.parse(setting).protocol).to.not.exist
		})
	})

	describe('.imageMakerUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'imageMakerUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should contain an https protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'imageMakerUrl')
			return m.chai.expect(url.parse(setting).protocol).to.equal('https:')
		})
	})

	describe('.deltaUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'deltaUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should contain an https protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'deltaUrl')
			return m.chai.expect(url.parse(setting).protocol).to.equal('https:')
		})
	})

	describe('.dashboardUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'dashboardUrl')
			return m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should contain an https protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'dashboardUrl')
			return m.chai.expect(url.parse(setting).protocol).to.equal('https:')
		})
	})

	describe('.proxyUrl', () => {

		it('should be a valid url', () => {
			const setting = utils.evaluateSetting(defaults, 'proxyUrl')
			m.chai.expect(() =>
				url.parse(setting)
			).to.not.throw(Error)
		})

		it('should not contain a protocol', () => {
			const setting = utils.evaluateSetting(defaults, 'proxyUrl')
			m.chai.expect(url.parse(setting).protocol).to.not.exist
		})
	})

	describe('.dataDirectory', () => {

		it('should be an absolute path', () => {
			const setting = utils.evaluateSetting(defaults, 'dataDirectory')
			const isAbsolute = setting === path.resolve(setting)
			return m.chai.expect(isAbsolute).to.be.true
		})
	})

	describe('.projectsDirectory', () => {

		it('should be an absolute path', () => {
			const setting = utils.evaluateSetting(defaults, 'projectsDirectory')
			const isAbsolute = setting === path.resolve(setting)
			return m.chai.expect(isAbsolute).to.be.true
		})
	})

	describe('.cacheDirectory', () => {

		it('should be an absolute path', () => {
			const setting = utils.evaluateSetting(defaults, 'cacheDirectory')
			const isAbsolute = setting === path.resolve(setting)
			return m.chai.expect(isAbsolute).to.be.true
		})
	})

	describe('.imageCacheTime', () => {

		it('should be a number', () => {
			const setting = utils.evaluateSetting(defaults, 'imageCacheTime')
			return m.chai.expect(setting).to.be.a('number')
		})

		it('should be a positive number', () => {
			const setting = utils.evaluateSetting(defaults, 'imageCacheTime')
			return m.chai.expect(setting > 0).to.be.true
		})
	})

	describe('.tokenRefreshInterval', () => {

		it('should be a number', () => {
			const setting = utils.evaluateSetting(defaults, 'tokenRefreshInterval')
			return m.chai.expect(setting).to.be.a('number')
		})

		it('should be a positive number', () => {
			const setting = utils.evaluateSetting(defaults, 'tokenRefreshInterval')
			return m.chai.expect(setting > 0).to.be.true
		})

		it('should be an integer', () => {
			const setting = utils.evaluateSetting(defaults, 'tokenRefreshInterval')
			return m.chai.expect(setting % 1).to.equal(0)
		})
	})

	describe('.apiKeyVariable', () => {

		it('should be a string', () => {
			const setting = utils.evaluateSetting(defaults, 'apiKeyVariable')
			return m.chai.expect(setting).to.be.a('string')
		})

		it('should not be empty', () => {
			const setting = utils.evaluateSetting(defaults, 'apiKeyVariable')
			return m.chai.expect(setting.trim().length).to.not.equal(0)
		})
	})

})
