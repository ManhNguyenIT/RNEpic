import * as actionTypes from '../actions/type';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, takeUntil, delay, map } from 'rxjs/operators';

const fakeApi = () => of({
        userId: 1,
        name: "chris",
        position: "Front-end",
        email: "chris.ho@innovatube.com"
    }
).pipe(delay(5000));

export default action$ => action$.pipe(
    ofType(actionTypes.FETCH_USER),
    mergeMap(() => fakeApi()
        .pipe(
            map(response => ({
                type: actionTypes.FETCH_USER_SUCCESS,
                payload: response
            })
            ),
            takeUntil(action$.ofType(actionTypes.CANCEL_FETCHING_USER))
        )
    )
);