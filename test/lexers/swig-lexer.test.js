import { assert } from 'chai'
import SwigLexer from '../../src/lexers/swig-lexer'

describe('SwigLexer', () => {
  it('extracts keys from translation components', (done) => {
    const Lexer = new SwigLexer()
    const content = '<p>{{t("first")}}</p>'
    assert.deepEqual(Lexer.extract(content), [{ key: 'first' }])
    done()
  })

  it('extracts multiple keys on a single line', (done) => {
    const Lexer = new SwigLexer()
    const content = '<p>{{t("first")}} {{t("second")}}</p>'
    assert.deepEqual(Lexer.extract(content), [{ key: 'first' }, { key: 'second' }])
    done()
  })

  // I'm not sure if I need all these 2nd argument features.
/*
  it('extracts the defaultValue arguments', (done) => {
    const Lexer = new SwigLexer()
    const content = '<p>{ {t("first", {defaultValue:"bla"}) }</p>'
    assert.deepEqual(Lexer.extract(content), [
      { key: 'first', defaultValue: 'bla' }
    ])
    done()
  })*/
/*
  it('extracts the context arguments', (done) => {
    const Lexer = new SwigLexer()
    const content = '<p>{{t "first" context="bla"}}</p>'
    assert.deepEqual(Lexer.extract(content), [{ key: 'first', context: 'bla' }])
    done()
  })

  it('supports a `functions` option', (done) => {
    const Lexer = new SwigLexer({ functions: ['tt', '_e'] })
    const content = '<p>{{link-to (tt "first") "foo"}}: {{_e "second"}}</p>'
    assert.deepEqual(Lexer.extract(content), [
      { key: 'first' },
      { key: 'second' }
    ])
    done()
  })

  describe('parseArguments()', () => {
    it('matches string arguments', (done) => {
      const Lexer = new SwigLexer()
      const args = '"first" "bla"'
      assert.deepEqual(Lexer.parseArguments(args), {
        arguments: ['"first"', '"bla"'],
        options: {}
      })
      done()
    })

    it('matches variable arguments', (done) => {
      const Lexer = new SwigLexer()
      const args = 'first bla'
      assert.deepEqual(Lexer.parseArguments(args), {
        arguments: ['first', 'bla'],
        options: {}
      })
      done()
    })

    it('matches key-value arguments', (done) => {
      const Lexer = new SwigLexer()
      const args = 'first="bla"'
      assert.deepEqual(Lexer.parseArguments(args), {
        arguments: ['first="bla"'],
        options: {
          first: 'bla'
        }
      })
      done()
    })

    it('skips key-value arguments that are variables', (done) => {
      const Lexer = new SwigLexer()
      const args = 'second=bla'
      assert.deepEqual(Lexer.parseArguments(args), {
        arguments: ['second=bla'],
        options: {
          // empty!
        }
      })
      done()
    })

    it('matches combinations', (done) => {
      const Lexer = new SwigLexer()
      const args =
        '"first" second third-one="bla bla" fourth fifth=\'bla\' "sixth"'
      assert.deepEqual(Lexer.parseArguments(args), {
        arguments: [
          '"first"',
          'second',
          'third-one="bla bla"',
          'fourth',
          "fifth='bla'",
          '"sixth"'
        ],
        options: {
          'third-one': 'bla bla',
          fifth: 'bla'
        }
      })
      done()
    })
  }) */
})