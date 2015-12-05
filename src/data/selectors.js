import { createSelector } from 'reselect';

export const app = state => state.app;

export const gallery = createSelector(
    app,
    (app) => ({ projects : app })
);