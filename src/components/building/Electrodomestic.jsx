import { useDispatch } from 'react-redux';
import { updateElectrodomesticState } from '../../store/slices/apartments';
import { hideToast, showToast } from '../../store/slices/toast';

export const Electrodomestic = ({ id, apartmentId, name, iconClass, state, watts }) => {

  // Init
  const dispatch = useDispatch();

  // Functions
  const switchState = (electrodomesticId, apartmentId) => {
    dispatch(updateElectrodomesticState({
      electrodomesticId,
      apartmentId
    }));

    dispatch(showToast({
      title: name,
      watts: state ? `-${watts} watts` : `+${watts} watts`,
      content: `Turned ${state ? 'off' : 'on'}`,
      state: true
    }));

    setTimeout(() => {
      dispatch(hideToast());
    }, 3000);
  }

  // JSX
  return (
    <i
      onClick={() => switchState(id, apartmentId)}
      className={`${iconClass} me-2 electrodomestic fa-lg`}
      style={state ? {color: '#15c3e6'} : {color: 'gray'} }></i>
  )
}
