import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import DeleteModal from './DeleteModal';

const AllUsers = () => {
  const [deleteItem, setDeleteItem] = useState(null);
  const closeDeleteModal = () => {
    setDeleteItem(null);
  };

  const {
    data: members,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/buyers', {
          method: 'GET',
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = member => {
    fetch(`http://localhost:5000/members/${member?._id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch();
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl text-center font-bold my-9">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members?.map((member, i) => (
              <tr key={member._id}>
                <th>{i + 1}</th>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td>
                  <label
                    onClick={() => setDeleteItem(member)}
                    htmlFor="delete-modal"
                    className="btn btn-sm bg-red-700 border-0"
                  >
                    DELETE
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteItem && (
        <DeleteModal
          header={`Want to delete this member?`}
          body={`If you delete ${deleteItem?.name} then you cannot be recover it..`}
          closeDeleteModal={closeDeleteModal}
          deleteConfirmMessage={handleDelete}
          modal={deleteItem}
        ></DeleteModal>
      )}
    </div>
  );
};

export default AllUsers;
