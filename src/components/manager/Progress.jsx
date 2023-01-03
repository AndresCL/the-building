import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetElectrodomesticState } from '../../store/slices/apartments'

export const Progress = ({ apartmentId, electrodomestics, wattsMax }) => {

  // Init
  const dispatch = useDispatch();
  const [wattTotal, setWattTotal] = useState(0);

  // Hooks
  useEffect(() => {
    let wattUsage = calculateWatt();
    console.log(wattUsage);
    if (wattUsage > 100) {
      dispatch(resetElectrodomesticState(apartmentId));
    } else {
      setWattTotal(Math.ceil(wattUsage));
    }
  }, [electrodomestics]);

  // Functions
  const calculateWatt = () => {
    const watts = electrodomestics.filter((e) => e.state).reduce((acc, obj) => {
      return acc + obj.watts;
    }, 0);

    return (watts * 100) / wattsMax;
  }

  // JSX
  return (
    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${wattTotal > 100 ? 'bg-danger' : 'bg-info'}`}
        style={{width: `${wattTotal}%`}}></div>
    </div>
  )
}
