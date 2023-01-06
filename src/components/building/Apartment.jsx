import { Progress } from '../manager/Progress';
import { Electrodomestic } from './Electrodomestic';
import { updateWattUsage } from '../../store/slices/apartments';
import { useDispatch } from 'react-redux';

export const Apartment = ({ id, electrodomestics, wattsMax, wattsUsage }) => {

  // Init
  const dispatch = useDispatch();

  // Process changes on electrodomestics states
  const onUpdateWattUsage = (type, payload) => {
    dispatch(updateWattUsage(type, payload));
  }

  // JSX
  return (
    <li className="apartment list-group-item">
      Apartment
      <hr />
      <Progress apartmentId={id} electrodomestics={electrodomestics} wattsMax={wattsMax} wattsUsage={wattsUsage} />
      <br />
      <div className="electrodomestics">
        {
          electrodomestics.map((electrodomestic) => (
            <Electrodomestic key={electrodomestic.id} apartmentId={id} {...electrodomestic} onUpdateWattUsage={onUpdateWattUsage}/>
          ))
        }
      </div>
    </li>
  )
}
