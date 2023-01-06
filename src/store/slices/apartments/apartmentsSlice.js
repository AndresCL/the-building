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
    wattsUsage: 0,
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
        wattsUsage: 0,
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
    updateWattUsage: (state, action) => {

      // Find apartment
      const apartment = state.apartments.find((apartment) => {
        return apartment.id === action.payload.apartmentId;
      });

      // Update total watts usage
      const wattsUsage =
        action.payload.type === 'increase' ? apartment.wattsUsage + action.payload.watts : apartment.wattsUsage - action.payload.watts;

      const wattsUsagePercent = (wattsUsage * 100) / apartment.wattsMax;

      if (wattsUsagePercent > 100) {
        // Reset electrodomestics state to false
        apartment.electrodomestics.forEach((electrodomestic) => {
          electrodomestic.state = false;
        });

        // Reset apartment watts usage
        apartment.wattsUsage = 0;
      } else {
        apartment.wattsUsage = wattsUsage;
      }

    },
  },
});

// Action creators are generated for each case reducer function
export const { addApartment, updateElectrodomesticState, updateWattUsage } = apartmentsSlice.actions;