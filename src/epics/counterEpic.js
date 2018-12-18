import { DECREASE, INCREASE, STOP_COUNTER, FETCH_USER, INCREASE_DONE } from '../actions/type';
// import { Observable } from 'rxjs';
import { interval,timer } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, takeUntil, map } from 'rxjs/operators';

export const counterEpic = action$ =>
    action$.pipe(
        ofType(INCREASE),
        mergeMap(() => interval(1000)
            .pipe(
                takeUntil(timer(30000)),
                map(() => ({ type: INCREASE_DONE })),
                takeUntil(action$.ofType(STOP_COUNTER))
            )
        )
    );