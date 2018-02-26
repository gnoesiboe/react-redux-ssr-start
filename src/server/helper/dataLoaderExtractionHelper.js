// @flow

import { matchRoutes } from 'react-router-config';
import routes from '../../shared/router/routes';
import type { Store } from 'redux';
import type { Route } from '../../shared/router/type';

type MatchedRoute = {
    route: Route
}

export function extractAllDataLoaderPromisesForCurrentRoute(path: String, store: Store<Function, Object>) {
    var matchedRoutes: Array<MatchedRoute> = matchRoutes(routes, path),
        promises = [];

    for (let i: number = 0, l: number = matchedRoutes.length; i < l; i++) {
        var matchedRoute: MatchedRoute = matchedRoutes[i],
            route: Route = matchedRoute.route;

        if (typeof route.loadData === 'undefined') {
            continue;
        }

        // wrap our load data promises in another promise that always resolves, to enable us to use Promise.all
        // without having an error break the chain
        var promise: Promise<any> = new Promise((resolve) => {

            // $ExpectError —> because above we have a check to see if loadData is available
            route.loadData(store).then(resolve).catch(resolve);
        });

        promises.push(promise);
    }

    return promises;
}
