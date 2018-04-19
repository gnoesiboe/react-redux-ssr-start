import React from 'react';
import { Redirect } from 'react-router';
import { createHomePath } from '../../../../router/urlGenerator';

export default function RedirectHome() {
    return (
        <Redirect to={ createHomePath() } />
    );
}
