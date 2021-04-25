// Import mongoose
import mongoose from 'mongoose';

// Schema let us define our objects
const { Schema } = mongoose;

// Define our Schema an his properties, this Schema must match with our DB
const PokemonSchema = Schema({
  url_image: String,
  type: Array,
  id: Number,
  name: [{
    japanese: String,
    chinese: String,
    english: String,
  }],
});

// Export our model, Model name, Schema, database collection
export default mongoose.model('Pokemon', PokemonSchema, 'pokemon');
