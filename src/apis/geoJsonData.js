import axios from 'axios';
import GEO_JSON from '../data/boat_ramps.geojson'

export default axios.create({
  baseURL: GEO_JSON
});