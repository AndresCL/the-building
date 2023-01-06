import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateElectrodomesticState } from '../../store/slices/apartments';
import { hideToast, showToast } from '../../store/slices/toast';

export const Electrodomestic = ({ id, apartmentId, name, iconClass, state, watts, onUpdateWattUsage }) => {

  // Init
  const dispatch = useDispatch();

  const switchState = (electrodomesticId, apartmentId) => {

    // Update electrodomestic state
    dispatch(updateElectrodomesticState({
      electrodomesticId,
      apartmentId
    }));

    // Show toast with information
    dispatch(showToast({
      title: name,
      watts: state ? `-${watts} watts` : `+${watts} watts`,
      content: `Turned ${state ? 'off' : 'on'}`,
      state: true
    }));

    // Hide toast later
    setTimeout(() => {
      dispatch(hideToast());
    }, 3000);

    // Call parent with the update
    const type = state ? 'decrease' : 'increase';
    onUpdateWattUsage({ apartmentId, type, watts });

  }

  // JSX
  return (
    <i
      onClick={() => switchState(id, apartmentId)}
      className={`${iconClass} me-2 electrodomestic fa-lg`}
      style={state ? {color: '#15c3e6'} : {color: 'gray'} }></i>
  )
}
