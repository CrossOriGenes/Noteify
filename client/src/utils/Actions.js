import { redirect } from "react-router-dom";
import { toast } from 'react-toastify';

const toasterVariants = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};

export async function action({ request, params }) {
    const method = request.method;
    const formData = await request.formData();

    const data = {
        title: formData.get('title'),
        description: formData.get('descr')
    };

    let url = `http://localhost:8080/notes/add`;
    let path = 'notes';

    if (method === 'PUT') {
        const id = params.noteId;
        url = `http://localhost:8080/notes/edit/${id}`;
        path = '..';
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });


    if (response.status === 422) {
        toast.error('Attempt Failed due to validation errors!', {
            ...toasterVariants,
            theme: "colored"
        });
        return response;
    }
    // if (response.status === 200) {
    //     const resData = await response.json();
    //     toast.success(resData.message, toasterVariants);
    // }
    if (response.status === 201) {
        const resData = await response.json();
        toast.success(resData.message, toasterVariants);
    }

    return redirect(path);
}


export async function delAction({ request, params }) {
    const id = params.noteId;
    const method = request.method

    const response = await fetch(`http://localhost:8080/notes/remove/${id}`, {
        method: method
    });

    if (!response.ok) {
        throw new Error('Failed to perform deletion!' + response.status);
    }
    // if (response.status === 204) {
    //     const data = await response.json();
    //     toast.success(data.message, toasterVariants);
    // }
    toast.success('Note deleted.', toasterVariants);

    return redirect('..');
}