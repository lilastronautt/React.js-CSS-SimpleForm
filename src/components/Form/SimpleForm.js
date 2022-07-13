import "./SimpleForm.css";
import Card from "../UI/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/index";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [onTouch, setOnTouch] = useState(false);
  const [inputBlur, setInputBlur] = useState(false);
  const [formState, setFormState] = useState(false);

  const content = useSelector((state) => state.content);
  const dispatch = useDispatch();

  let nameIsInvalid = name.trim() === "";
  let emailIsInvalid = !email.trim().includes("@");

  useEffect(() => {
    !nameIsInvalid && !emailIsInvalid
      ? setFormState(true)
      : setFormState(false);
  }, [emailIsInvalid, nameIsInvalid]);

  const onEnterNameHandler = (event) => {
    setName(event.target.value);
  };

  const onEnterEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onAddDataClick = () => {
    dispatch(formActions.toggle());
  };

  const inputBlurHandler = () => {
    setOnTouch(true);
    setInputBlur(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setOnTouch(true);
    setInputBlur(true);
    if (nameIsInvalid) {
      return;
    }

    if (emailIsInvalid) {
      return;
    }

    dispatch(
      formActions.saveForm({ id: Math.random(), name: name, email: email })
    );
    setName("");
    setEmail("");
    setOnTouch(false);
  };

  const nameInputIsInvalid = onTouch && nameIsInvalid && inputBlur;
  const emailInputIsInvalid = onTouch && emailIsInvalid && inputBlur;

  const nameInputClasses = nameInputIsInvalid ? "input error" : "input";
  const emailInputClasses = emailInputIsInvalid ? "input error" : "input";

  return (
    <Card className="form-container">
      <div style={{ textAlign: "center" }}>
        {
          <button onClick={onAddDataClick}>
            {content === false ? "Add Data" : "Cancel"}
          </button>
        }
      </div>
      {content && (
        <form onSubmit={onSubmitHandler}>
          <div className="form-inputs">
            <div className="form-input">
              <label>Name</label>
              <input
                className={nameInputClasses}
                type="text"
                onChange={onEnterNameHandler}
                value={name}
                onBlur={inputBlurHandler}
              />
              {nameInputIsInvalid && <h5>Cannot be Empty!!</h5>}
            </div>
            <div className="form-input">
              <label>Email</label>
              <input
                className={emailInputClasses}
                type="text"
                value={email}
                onChange={onEnterEmailHandler}
                onBlur={inputBlurHandler}
              />
              {emailInputIsInvalid && <h5>Not a valid Email!!!</h5>}
            </div>
          </div>
          <div className="form-actions">
            <button type="Submit" disabled={!formState}>
              Save
            </button>
          </div>
        </form>
      )}
    </Card>
  );
};

export default SimpleForm;
