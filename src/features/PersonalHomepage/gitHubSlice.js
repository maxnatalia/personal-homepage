import { createSlice } from "@reduxjs/toolkit";

const gitHubSlice = createSlice({
    name: "gitHub",
    initialState: {
        repositories: null,
        status: "initial",
    },

    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),

        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),

        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } = gitHubSlice.actions;

const selectGitHubState = state => state.gitHub;

export const selectRepositories = state => selectGitHubState(state).repositories;
export const selectRepositoriesStatus = state => selectGitHubState(state).status;

export default gitHubSlice.reducer;