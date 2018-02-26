// @flow

import type { Store } from 'redux';
import type { Node } from 'react';

export type Route = {
    path: string,
    component: Node,
    exact?: boolean,
    loadData?: (store: Store) => Promise<any>
}
