import { useSelector } from 'react-redux';
import { Navbar } from '../manager/Navbar';
import { Apartment } from './Apartment';
import { Toast } from '../manager/Toast';

export const Building = () => {

  // Init
  const { apartments } = useSelector((state) => state.apartments);

  // JSX
  return (
    <>
      <div className="building-workspace">
        <ul className="list-group">
          {
            apartments.map((apartment) => (
              <Apartment key={apartment.id} {...apartment} />
            ))
          }
        </ul>

        <Navbar/>
      </div>

      <Toast />
    </>

  )
}
