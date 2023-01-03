import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const electrodomestics = [
  { id: uuidv4(), name: 'Light', iconClass: 'bi bi-lightbulb-fill', state: false, watts: 100 },
  { id: uuidv4(), name: 'Tv', iconClass: 'bi bi-tv-fill', state: false, watts: 90 },
  { id: uuidv4(), name: 'PC', iconClass: 'bi bi-pc-display', state: false, watts: 300 },
  { id: uuidv4(), name: 'Lamp', iconClass: 'bi bi-lamp-fill', state: false, watts: 100 },
  { id: uuidv4(), name: 'Laptop', iconClass: 'bi bi-laptop', state: false, watts: 300 },
  { id: uuidv4(), name: 'Videogame', iconClass: 'bi bi-controller', state: false, watts: 20 }
];

const initialState = {
  apartments: [{
    id: uuidv4(),
    name: 'New apartment',
    wattsMax: 700,
    electrodomestics
  }]
}

export const apartmentsSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    addApartment: (state) => {
      state.apartments.push({
        id: uuidv4(),
        name: 'New apartment',
        wattsMax: 700,
        electrodomestics
      });
    },
    updateElectrodomesticState: (state, action) => {

      // Find apartment
      const apartment = state.apartments.find((apartment) => {
        return apartment.id === action.payload.apartmentId;
      });

      // Find electrodomestic
      const electrodomestic = apartment.electrodomestics.find((electrodomestic) => {
        return electrodomestic.id === action.payload.electrodomesticId
      });

      // Update it state
      electrodomestic.state = !electrodomestic.state;
    },
    resetElectrodomesticState: (state, action) => {
      console.log('resetElectrodomesticState...')
      // Find apartment
      const apartment = state.apartments.find((apartment) => {
        return apartment.id === action.payload;
      });
      console.log(apartment)
      // Reset electrodomestics state to false
      apartment.electrodomestics.forEach((electrodomestic) => {
        electrodomestic.state = false;
      })
    }
  },
});

// Action creators are generated for each case reducer function
export const { addApartment, resetElectrodomesticState, updateElectrodomesticState } = apartmentsSlice.actions;