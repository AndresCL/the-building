import { useDispatch, useSelector } from 'react-redux';
import { addApartment } from '../../store/slices/apartments';

export const Navbar = () => {

  // Init
  const dispatch = useDispatch();

  // Functions
  const addNewApartment = () => {
    dispatch(addApartment());
  }

  // JSX
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><strong>The</strong> Building</a>
          <button
            className="btn btn-outline-success"
            onClick={addNewApartment}>
               <i className="bi bi-building-add"></i> Add Apartment
          </button>
        
      </div>
    </nav>
  )
}
