import { ConfigDBReducer } from "./ConfigDBReducer";
import { ModelReducer } from './ModelReducer';

export default (MyCombineReducers = {
  config: ConfigDBReducer,
  model: ModelReducer
});
