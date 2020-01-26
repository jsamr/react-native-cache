import { normalizeTarget } from '../normalize-target'

describe('engine/normalize-target', () => {
  it('Should normalize string targets', () => {
    expect(normalizeTarget('https://api.github.com/users')).toMatchObject({ uri: 'https://api.github.com/users' })
  })
  it('Should keep definitions', () => {
    const original = { uri: 'https://api.github.com/users', headers: { test: 'test' } }
    expect(normalizeTarget(original)).toEqual(original)
  })
})
