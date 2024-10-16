import Swal from 'sweetalert2';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-light mr-3',
  },
  buttonsStyling: false,
});

export { swalWithBootstrapButtons };
