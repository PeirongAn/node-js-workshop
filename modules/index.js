// Import Logger
import log from '../logger';
// Import models
import PokemonModel from '../models';
// Import errors
import { errors } from '../constants';

class PokemonModule {
  static async find(id) {
    let pokemon = [];

    // Destructure errors
    // const {
    //   getDBerror,
    // } = errors;

    try {
      // Find the pokemon through the model
      pokemon = await PokemonModel.find({ id }, null, { limit: 1 });
    } catch (error) {
      // If error log the error
      log(getDBerror(id, error.stack));
    }
    return pokemon[0];
  }

  static async add(pokemon) {
    // Destructure errors
    const {
      addDBerror,
      existentPokemonError,
    } = errors;

    try {
      // Create a new instance of PokemonModel from the incoming object
      const newPokemon = new PokemonModel(pokemon);
      // Destructure id
      const { id } = newPokemon;
      // Find if the Pokemon id already exists
      const pokemonExists = await PokemonModule.find(id);

      // Pokemon exists flag
      let existent = false;

      // If Pokemon exists the flag must change
      if (pokemonExists) {
        log(existentPokemonError(id));
        existent = true;
      } else {
        // Othercase save new Pokemon
        await newPokemon.save();
      }

      // Return pokemon with the existent flag
      return { addedPokemon: newPokemon, existent };
    } catch (error) {
      log(addDBerror(pokemon, error.stack));
      return { addedPokemon: undefined };
    }
  }

  static async update(pokemon) {
  // Destructure errors
    const {
      updateDBerror,
      notFound,
    } = errors;

    try {
    // Build Pokemon model object with the incoming information
      let updatedPokemon = new PokemonModel(pokemon);

      // Get the fields to update
      // eslint-disable-next-line camelcase
      const { id, name, type, url_image } = updatedPokemon;

      // Find the Pokemon firts
      const pokemonExists = await PokemonModule.find(id);

      if (!pokemonExists) {
      // If nothing to update, no object to return
        log(notFound(id));
        updatedPokemon = undefined;
      } else {
      // If Pokemon exists, update the Pokemon Information
        await PokemonModel.updateOne(
        // Where id = id (not _id)
          { id },
          // Information to update
          { name, type, url_image },
        );
      }

      return { updatedPokemon };
    } catch (error) {
      log(updateDBerror(pokemon, error.stack));
      // If error occurs no information will be returned
      return { updatedPokemon: undefined };
    }
  }

  static async delete(id) {
  // Destructure errors
    const {
      deleteDBerror,
      notFound,
    } = errors;

    try {
    // Find Pokemon by id
      const deletedPokemon = await PokemonModule.find(id);

      if (!deletedPokemon) {
      // If pokemon does not exist nothing to delete
        log(notFound(id));
      } else {
      // Delete the Pokemon
        await PokemonModel.findOneAndRemove({ id });
      }

      // Return deleted pokemon
      return { deletedPokemon };
    } catch (error) {
      log(deleteDBerror(id, error.stack));
      return { deletedPokemon: undefined };
    }
  }
}

export default PokemonModule;
