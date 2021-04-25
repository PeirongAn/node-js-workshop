// Error constants
const errors = {
  // Add error constants
  notFound:
        (id) => `
        Pokemon with id: ${id} does not exists`,
  getDBerror:
        (id, stack) => `
        Error getting Pokemon with id: ${id}, stack: ${stack}`,
  addError:
        (pokemon) => `
        Pokemon could not be added - Pokemon: ${JSON.stringify(pokemon)}`,

  existentPokemonError:
        (id) => `Pokemon with id: ${id} already exists`,
  addDBerror:
        (pokemon, stack) => `
        Error adding Pokemon:
        ${JSON.stringify(pokemon)}, stack: ${stack}`,
  updateError:
        (pokemon) => `
        Pokemon could not be updated - Pokemon: ${JSON.stringify(pokemon)}`,
  updateDBerror:
        (pokemon, stack) => `
        Error updating Pokemon: ${JSON.stringify(pokemon)}, stack: ${stack}`,
  deleteError:
        (id) => `
        Pokemon could not be deleted - Pokemon with id: ${id}`,
  deleteDBerror:
        (id, stack) => `
        Error deleting Pokemon with id: ${id}, stack: ${stack}`,

};

// Actions constants
const actions = {
  // Add action constants
  get:
        (id) => `
        Getting pokemon with id: ${id}`,
  found:
        (pokemon) => `
        Founded pokemon - ${JSON.stringify(pokemon)}`,
  add:
        (pokemon) => `
        Pokemon to add - ${JSON.stringify(pokemon)}`,
  existent:
        (pokemon) => `
        Pokemon already exists - ${JSON.stringify(pokemon)}`,
  update:
        (pokemon) => `
        Pokemon to update - ${JSON.stringify(pokemon)}`,
  deleted:
        (id) => `
        Pokemon to delete - ${id}`,
};

// Request headers;
const ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
const ALLOW_WILDCARD = '*';
const ALLOW_HEADERS = 'Access-Control-Allow-Headers';
const REST_HEADERS_OPTIONS = 'Authorization, '
    + 'X-API-KEY, Origin, X-Requested-With, '
    + 'Content-Type, Accept, '
    + 'Access-Control-Allow-Request-Method';
const ALLOW_METHODS = 'Access-Control-Allow-Methods';
const ALLOW = 'Allow';
const REST_METHODS = 'GET, POST, OPTIONS, PUT, DELETE';

export {
  errors,
  actions,
  ALLOW_ORIGIN,
  ALLOW_WILDCARD,
  ALLOW_HEADERS,
  REST_HEADERS_OPTIONS,
  ALLOW_METHODS,
  ALLOW,
  REST_METHODS,
};
