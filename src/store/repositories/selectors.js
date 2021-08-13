export const selectRepositoriesItems = (state) => state.repositories.items;
export const selectRepositoriesLoading = (state) => state.repositories.loading;
export const selectRepositoriesError = (state) => state.repositories.error;
export const selectRepositoryById = (id) => (state) => {
    return state.repositories.items.find((item) => item.id === +id);
};
