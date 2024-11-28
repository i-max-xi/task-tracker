const environment = import.meta.env;

export const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export const variables = {
  base_url: environment.VITE_API_BASE_URL,
};
