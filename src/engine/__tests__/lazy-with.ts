import { cold, hot } from 'jest-marbles'
import { lazyWith } from '../lazy-with'

// https://rxviz.com/v/5o1e6K9o
describe('rxjs/lazy-with', () => {
  it('should wait for trigger before emitting', () => {
    const source = cold('A-------|')
    const trigger = hot('^A------|')
    expect(lazyWith(source, trigger)).toBeMarble('-A------|')
  })
  it('should buffer values from source', () => {
    const source = cold('AB-----C|')
    const trigger = hot('^-A-----|')
    expect(lazyWith(source, trigger)).toBeMarble('--(AB)-C|') // TODO fix with jest marbles
  })
})
