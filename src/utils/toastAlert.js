import Swal from "sweetalert2";

const toastAlert = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#be9c79",
    color: "#FFF",
  });

  export default toastAlert