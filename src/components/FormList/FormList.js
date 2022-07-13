import "./FormList.css";

import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/index";

const FormList = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <>
      {data.map((item) => {
        const onClickHandler = () => {
          dispatch(formActions.deleteEntry(item.id));
        };
        return (
          <ul key={item.id}>
            <Card className="form-list">
              <li>
                Name :{item.name} ||||||||||||| Email: {item.email}
              </li>
              <button onClick={onClickHandler}>delete</button>
            </Card>
          </ul>
        );
      })}
    </>
  );
};

export default FormList;
