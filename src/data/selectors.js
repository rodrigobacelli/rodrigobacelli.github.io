import { createSelector } from 'reselect';

export const app = state => state.app;
export const filterApp = (state, props) => state.app.filter((x) => x.slug === props.params.slug).reduce(x=>x.get(0))
export const gallery = createSelector(
    app,
    (app) => ({ projects : app })
);

export const project = createSelector(
    filterApp,
    (filterApp) => ({ project: filterApp})
)