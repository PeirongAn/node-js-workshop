const router = require('express').Router();
const { PokemonController } = require('../controllers');

// The router will definde the method, the path and the controller operation
router.get('/pokemon/:id', PokemonController.getPokemon);
router.post('/pokemon/', PokemonController.addPokemon);
router.put('/pokemon/:id', PokemonController.updatePokemon);
router.delete('/pokemon/:id', PokemonController.deletePokemon);
export default router;
