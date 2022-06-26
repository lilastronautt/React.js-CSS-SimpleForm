import "./FormList.css";

import Card from "../UI/Card";

const FormList = (props) => {
  return (
    <>
      {props.data.map((item) => {
        const onClickHandler = () => {
          props.delete(item.id);
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
