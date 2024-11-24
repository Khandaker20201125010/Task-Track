import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const { register, handleSubmit ,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { id } = useParams();
   
    const { data: singleTaskData = {}, isLoading } = useQuery({
        queryKey: ['task', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task/${id}`);
            return res.data;
        }
       
    });
    const {_id,name,gender,brand,price,rating,quantity,reviews,description,category} = singleTaskData;
    const onSubmit = async (data) => {
          const updateTask = {
            name: data.name,
            description: data.description,
          };
          const productRes= await axiosPublic.patch(`/task/${id}`,updateTask)
          if(productRes.data.modifiedCount > 0){
            reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${data.name} has been updated successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            
           
          }else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
              
          }
        
      };
      useEffect(() => {
        reset(singleTaskData);
    }, [singleTaskData, reset]);
  return (
    <div>
      <div className="min-h-screen container mx-auto p-10 bg-gradient-to-r from-slate-900 via-slate-800 to-green-500 rounded-md shadow-[0_0_25px_10px_rgba(255,165,0,0.5)]">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Update Task</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="w-1/2">
              {/* Product Name */}
              <label className="form-control w-full my-6 ">
                <div className="label">
                  <span className="label-text text-white">Product Name</span>
                </div>
                <input
                  {...register("name")}
                  defaultValue={name}
                  type="text"
                  placeholder="Please enter product name"
                  className="input input-warning input-bordered w-full "
                />
              </label>
            </div>
            
          </div>

       

          <div>
            {/* {description} */}
            <label className="form-control">
              <div className="label">
                <span className="label-text text-white">Description</span>
              </div>
              <textarea
                defaultValue={description}
                {...register("description")}
                className="textarea textarea-warning textarea-bordered h-24"
                placeholder="Write description about product"
              ></textarea>
            </label>
          </div>
          <button className="btn mt-5 bg-gradient-to-r from-black to-green-500 font-bold text-xl text-white">
           
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
