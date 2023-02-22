import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist:["contacts"]
};

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)


 export const store = configureStore({
  reducer: persistedReducer
});


export const persiststor = persistStore(store) ;

