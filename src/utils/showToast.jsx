import React from 'react';
import Swal from 'sweetalert2';

const showToast = ({ icon, message }) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000, // Toast will disappear after 3 seconds
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    // Display the toast notification
    Toast.fire({
        icon: icon,
        title: message,
    });
};

export default showToast;
