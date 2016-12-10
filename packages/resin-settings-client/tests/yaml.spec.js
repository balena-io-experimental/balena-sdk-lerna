const m = require('mochainon')
const yaml = require('../build/yaml')

const YAML_OBJECT = `
hello: 'world'
foo: 'bar'
`

const YAML_LIST = `
list:
- foo
- bar
- baz
`

describe('YAML:', () =>

	describe('.parse()', () => {

		it('should throw an error if invalid input', () =>
			m.chai.expect(() =>
				yaml.parse('hello;world\n- foo')
			).to.throw('Invalid YAML: hello;world\n- foo')
		)

		it('should be able to parse strings', () => {
			const result = yaml.parse(YAML_OBJECT)

			return m.chai.expect(result).to.deep.equal({
				hello: 'world',
				foo: 'bar'
			})
		})

		it('should be able to parse numbers', () => {
			const result = yaml.parse(`phone: 12345`)

			return m.chai.expect(result).to.deep.equal({ phone: 12345 })
		})

		it('should be able to parse lists', () => {
			const result = yaml.parse(YAML_LIST)

			return m.chai.expect(result).to.deep.equal({
				list: [ 'foo', 'bar', 'baz' ]
			})
		})

	})

)
