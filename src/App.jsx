import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_INCREMENT } from "./redux-core/reducers/countReducer/countAction";


function App() {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(COUNT_INCREMENT(45));
  }, []);
  return <div></div>;
}

export default App;
