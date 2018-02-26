// @flow

import type { Action, ActionData, ActionMeta } from '../type';

export function createAction(type: string, promise: ?Promise<any> = null, data: ActionData = {}, meta: ActionMeta = {}): Action {
    return {
        type,
        payload: {
            data: data,
            promise: promise
        },
        meta
    };
}
