import { combineReducers, configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import { personReducer } from "./features/person";

const configureAppStore = (repository) =>
  configureStore({
    reducer: {
      entities: combineReducers({
        // register person reducer
        persons: personReducer
      })
    },
    middleware: middleware.map(m => m(repository)),
  });

export default configureAppStore;