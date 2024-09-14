export const calculateRemainingDays = (deadline) => {
    if (!deadline) return 'No deadline set';
  
    const today = new Date();
    const dueDate = new Date(deadline);
  
    const differenceInDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24)); // Calculate the difference in days
  
    if (differenceInDays > 0) {
      return <span className="text-xs font-semibold">{differenceInDays} days left</span>;
    } else if (differenceInDays === 0) {
      return <span className="text-xs font-semibold">Due today</span>;
    } else {
      return <span className="text-red-500 text-xs font-semibold">{Math.abs(differenceInDays)} days ago</span>;
    }
  };
  