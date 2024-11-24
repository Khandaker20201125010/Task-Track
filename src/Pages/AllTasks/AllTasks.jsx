import React, { useEffect, useRef, useState } from "react";
import useTask from "../../Hooks/useTask";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { GrNext, GrPrevious } from "react-icons/gr";
import AllTasksCard from "./AllTasksCard";

const AllTasks = () => {
  const [task] = useTask();
  const axiosPublic = useAxiosPublic();
  const [itemPerPages, setItemPerPages] = useState(6); // Items per page
  const [currentPages, setCurrentPages] = useState(0); // Current active page
  const [paginatedTask, setPaginatedTask] = useState([]); // Tasks to display
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Search filter
  const [sortOrder, setSortOrder] = useState("lowToHigh"); // Sorting state
  
  const dataLength = task?.length || 0;
  const numberOfPages = Math.ceil(dataLength / itemPerPages); // Calculate total pages

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/task?page=${currentPages}&size=${itemPerPages}`)
      .then((res) => {
        setPaginatedTask(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching paginated tasks:", error);
        setLoading(false);
      });
  }, [currentPages, itemPerPages, axiosPublic]);

  // Filter tasks based on the search query
  const filteredTasks = paginatedTask.filter(
    (taskItem) =>
      taskItem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      taskItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort tasks based on the selected sorting order
  const sortedTasks =
    sortOrder === "default"
      ? filteredTasks
      : [...filteredTasks].sort((a, b) => {
          if (sortOrder === "lowToHigh") {
            return a.price - b.price; // Ascending order
          } else {
            return b.price - a.price; // Descending order
          }
        });

  // Handle pagination navigation
  const handlePreviousPage = () => {
    if (currentPages > 0) {
      setCurrentPages((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPages < numberOfPages - 1) {
      setCurrentPages((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Search and Sort */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-2 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="default">Default</option>
        </select>
      </div>

      {/* Tasks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          sortedTasks.map((taskItem) => (
            <AllTasksCard key={taskItem._id || taskItem.id} task={taskItem} />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={handlePreviousPage}
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPages === 0}
        >
          <GrPrevious size={20} />
        </button>
        {Array.from({ length: numberOfPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPages(index)}
            className={`px-4 py-2 rounded-md ${
              currentPages === index
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPages === numberOfPages - 1}
        >
          <GrNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default AllTasks;
