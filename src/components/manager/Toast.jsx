
import { useDispatch, useSelector } from 'react-redux';

import { hideToast } from '../../store/slices/toast';

export const Toast = () => {

  // Init
  const dispatch = useDispatch();
  const { toast } = useSelector((state) => state.toast);
  const { title, watts, content, display } = toast;

  // Functions
  const closeToast = () => {
    dispatch(hideToast());
  }

  // JSX
  return (
    <div className={display ? 'toast show' : 'toast hide'} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <i className="bi bi-info-circle-fill me-2"></i>
        <strong className="me-auto">{title}</strong>
        <small>{watts}</small>
        <button type="button" className="btn-close" onClick={() => closeToast()}></button>
      </div>
      <div className="toast-body">
        {content}
      </div>
    </div>
  )
}
