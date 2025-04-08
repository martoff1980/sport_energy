import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export const showErrorMessage = (
  {
    title,
    message,
    position,
    ...otherOptions
  } = {
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    position: 'topRight'
  }) => {
  iziToast.error({
    title: title,
    message: message,
    position: position,
    ...otherOptions
  });
}