import log from '../logger';
// Import Module
import PokemonModule from '../modules';
// Import Constants
import { actions, errors } from '../constants';

class PokemonController {
  static async getPokemon(req, res) {
    // Get the id from the request params
    const { id } = req.params;

    // Destructure actions
    // const {
    //   get,
    //   found,
    // } = actions;

    // Destructure errors
    const {
      notFound,
    } = errors;

    // Get the pokemon through the Module
    const pokemon = await PokemonModule.find(id);

    // log(get(id));

    if (pokemon) {
      // If a pokemon was founded it will be returned
      // log(found(pokemon));
      res.send({ pokemon });
    } else {
      // if error throw an error
      res.status(404).send({ error: notFound(id) });
    }
  }

  static async addPokemon(req, res) {
    // Destructure actions
    const {
      add,
      existent: existentAction,
    } = actions;

    // Destructure errors
    const {
      addingError,
    } = errors;

    // Get the Pokemon info from post request
    const {
      url_image: urlImage,
      type,
      id,
      name,
    } = req.body;

    // Create the pokemon object
    const pokemon = {
      url_image: urlImage,
      type,
      id,
      name,
    };

    // Get the addedPokemon (the pokemon was added)
    // Get the existent flag (know if the pokemon already exists)
    const { addedPokemon, existent } = await PokemonModule.add(pokemon);

    // Verify if the Pokemon was added
    //   or prevously existent to return information
    if (addedPokemon || existent) {
      // eslint-disable-next-line no-unused-expressions
      !existent && log(add(addedPokemon));
      // eslint-disable-next-line no-unused-expressions
      existent && log(existentAction(addedPokemon));
      res.send({ pokemon: addedPokemon, existent });
    } else {
      // if error throw an error
      res.status(500).send({ error: addingError(id) });
    }
  }

  static async updatePokemon(req, res) {
  // Destructure params
    const { id } = req.params;

    // Destructure actions
    const {
      update,
    } = actions;

    // Destructure errors
    const {
      updateError,
    } = errors;

    // Get the body params
    const {
      url_image: urlImage,
      type,
      name,
    } = req.body;

    // Build Pokemon object with body information
    const pokemon = {
      url_image: urlImage,
      type,
      id,
      name,
    };

    // Update Pokemon
    const { updatedPokemon } = await PokemonModule.update(pokemon);

    if (updatedPokemon) {
    // If Pokemon was updated notify
      log(update(updatedPokemon));
      res.send({ pokemon: updatedPokemon });
    } else {
    // Notify if error occurs
      res.status(500).send({ error: updateError(pokemon) });
    }
  }

  static async deletePokemon(req, res) {
  // Destrucuture id
    const { id } = req.params;

    // Destrucuture actions
    const {
      deleted,
    } = actions;

    // Destrucuture errors
    const {
      deleteError,
    } = errors;

    // Delete Pokemon by id
    const { deletedPokemon } = await PokemonModule.delete(id);

    if (deletedPokemon) {
      log(deleted(deletedPokemon));
      res.send({ pokemon: deletedPokemon });
    } else {
      res.status(500).send({ error: deleteError(id) });
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PokemonController };
