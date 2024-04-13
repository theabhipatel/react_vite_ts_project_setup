import ReactLogo from "@assets/react.svg";
import { decrement, increment } from "@slices/auth.slice";
import { useAppDispatch, useAppSelector } from "@store/hooks";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.auth);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <div className="text-white">
      <h1>Dashboard</h1>
      <img src={ReactLogo} alt="react logo" className="w-96 h-96" />
      <div className="w-96 h-52 border rounded-md border-white flex justify-center items-center">
        <button onClick={handleDec} className="w-20 h-10 bg-red-600">
          -
        </button>
        <h1 className="mx-10">{value}</h1>
        <button onClick={handleInc} className="w-20 h-10 bg-red-600">
          +
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
