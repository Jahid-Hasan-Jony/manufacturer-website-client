import React from 'react';
import { useQuery } from 'react-query';
import LoadingPage from '../LoadingPage/LoadingPage';
import Users from './Users';

const MakeAdminPage = () => {
    const { isLoading, data, refetch } = useQuery('orderData', () =>
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <div>
            <h1>Total Users : {data.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>E-mail</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, indx) => <Users key={user._id} refetch={refetch} indexNumber={indx} allUser={user} />)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdminPage;