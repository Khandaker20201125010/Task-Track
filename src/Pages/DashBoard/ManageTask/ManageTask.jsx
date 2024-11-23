import React from 'react';
import useTask from '../../../Hooks/useTask';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageTask = () => {
    const [task, refetch] = useTask();
    const axiosPublic = useAxiosPublic() ;
    const handleDeletetask = (item) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosPublic.delete(`/task/${item._id}`);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} has been deleted successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    };
    return (
      <div className="w-full px-6 bg-gradient-to-br from-gray-500 to-black border-2xl border-2 border-green-800 text-white">
     
        <div>
          <h3 className="text-3xl font-bold text-center mb-5">
            Current task: {task.length}
          </h3>
        </div>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="hover:bg-red-700 text-white">
                <tr>
                  <th>No</th>
                 
                  <th>Name</th>
                  <th>Description</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {task.map((item, index) => (
                  <tr className="hover:bg-red-700" key={item._id}>
                    <td> {index + 1}</td>
                    <td>
                      {item.name}
                      <br />
                    </td>
                    <td>{item.description}</td>
                    <th>
                      <Link to={`/dashboard/updatetask/${item._id}`}>
                        <button className="btn btn-ghost btn-md btn-circle bg-orange-600 hover:bg-red-600">
                          <FaEdit className="text-white text-2xl  hover:bg-red-600"></FaEdit>
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeletetask(item)}
                        className="btn btn-ghost  btn-circle btn-md hover:bg-gray-800"
                      >
                        <FaTrash className="text-red-500 text-2xl"></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

export default ManageTask;