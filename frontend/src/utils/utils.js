import Swal from 'sweetalert2'
import uniqid from 'uniqid';



const cusAlert = async (message, theIcon) =>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      })
      await Toast.fire({
        icon: `${theIcon}`,
        title: `${message}`
      })

      return Toast
}

const uniqueId = () => {
  return uniqid('CART-', '-FLW')
}

export {cusAlert, uniqueId}