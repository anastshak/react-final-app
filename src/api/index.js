export const getRepositories = () =>
  fetch("https://api.github.com/repositories").then(
    (response) => response.json()
  );
