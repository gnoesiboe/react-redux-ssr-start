// @flow

import axios from 'axios';

export function get(path: string): Promise<any> {
    return axios.get(path);
}
