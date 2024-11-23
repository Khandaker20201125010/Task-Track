import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Addtask = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
  
      const task = {
        name: data.name,
    
        description: data.description,
    
      };
      const taskRes = await axiosPublic.post("/task", task);
      if (taskRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} has been listed successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
 
  };
  return (
    <div>
      
      <div className="container mx-auto p-10 bg-gradient-to-r from-slate-900 via-slate-800 min-h-screen to-green-500  shadow-[0_0_25px_10px_rgba(255,165,0,0.5)]">
      <div className="text-center p-6">
            <h1 className="text-3xl font-bold text-white">Add Task</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="w-1/2">
              {/* TaskName */}
              <label className="form-control w-full my-6 ">
                <div className="label">
                  <span className="label-text text-white ">TaskName</span>
                </div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Please enter Taskname"
                  className="input input-success input-bordered w-full "
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
                {...register("description")}
                className="textarea textarea-success textarea-bordered h-24"
                placeholder="Write description about product"
              ></textarea>
            </label>
          </div>
      
      
         
         

          <button className="btn mt-5 bg-gradient-to-r from-white to-green-500 font-bold text-xl">
          
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtask;
