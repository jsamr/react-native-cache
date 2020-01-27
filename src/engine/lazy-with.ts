import { Observable, merge } from 'rxjs'
import { first, buffer, skipUntil, mergeAll } from 'rxjs/operators'

/**
 * Produce pipe operator which produce a stream which starts emitting only when the lazyTrigger source has emmitted at least once,
 * and emits all values from source which have been buffered before lazyTrigger emits its first value.
 *
 * @param source$ - The source to lazy-load.
 * @param lazyTrigger$ - The stream which will trigger the first emit.
 */
export function lazyWith<T1>(source$: Observable<T1>, lazyTrigger$: Observable<any>) {
  return merge(source$.pipe(buffer(lazyTrigger$.pipe(first())), mergeAll()), source$.pipe(skipUntil(lazyTrigger$)))
}
