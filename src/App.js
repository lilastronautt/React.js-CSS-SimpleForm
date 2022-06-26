import React from "react";
import SimpleForm from "./components/Form/SimpleForm";
import FormList from "./components/FormList/FormList";
import { useState } from "react";

function App() {
  // console.log(name, email);
  const data = [
    { id: 1, name: "John", email: "John@test.com" },
    { id: 2, name: "Amaan", email: "John@gmail.com" },
  ];
  const [items, setItems] = useState(data);

  const onSaveFormHandler = (data) => {
    setItems((prevState) => [data, ...prevState]);
  };

  const onDeleteHandler = (id) => {
    const newData = data.filter((_, index) => {
      return data[index].id !== Number(id);
    });
    setItems((prevState) => {
      return newData;
    });
  };

  return (
    <React.Fragment>
      <SimpleForm onSaveForm={onSaveFormHandler}></SimpleForm>
      <FormList data={items} delete={onDeleteHandler}></FormList>
    </React.Fragment>
  );
}

export default App;
