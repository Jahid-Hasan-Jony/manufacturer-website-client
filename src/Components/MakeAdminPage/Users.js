import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ indexNumber, allUser, refetch }) => {
    const { email, role } = allUser
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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
                if (data.modifiedCount > 0) {
                    toast.success("Admin Process has been success")
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{indexNumber + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-sm'>Remove User</button></td>
        </tr>
    );
};

export default Users;