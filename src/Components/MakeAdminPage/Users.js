import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ indexNumber, allUser, refetch }) => {
    const { email, role } = allUser
    const makeAdmin = () => {
        fetch(`https://peaceful-chamber-04426.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('failed to make admin')
            }
            return res.json()
        })
            .then(data => {
                if (data.result.modifiedCount > 0) {
                    refetch();
                    toast.success("Admin Process has been success")
                }
            })
    }
    return (
        <tr>
            <th>{indexNumber + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
        </tr>
    );
};

export default Users;