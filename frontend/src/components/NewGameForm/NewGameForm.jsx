import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import Input from "../../components/generics/Input/Input";

let initialValues = {
  type: "",
  court_type: "",
  score: "",
  date: "",
  time: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
};

const NewGameForm = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewGame
  );
  async function postNewGame() {
    console.log(formData);
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/game/post/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.formData);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        label="Type"
        name="type"
        value={formData.type}
        onChange={handleInputChange}
      />
      <Input
        label="Court"
        name="court_type"
        value={formData.court_type}
        onChange={handleInputChange}
      />
      <Input
        label="Score"
        name="score"
        value={formData.score}
        onChange={handleInputChange}
      />
      <Input
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <Input
        label="Time"
        name="time"
        type="time"
        value={formData.time}
        onChange={handleInputChange}
      />
      <Input
        label="Street"
        name="street"
        value={formData.street}
        onChange={handleInputChange}
      />
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
      />
      <Input
        label="State"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
      />
      <Input
        label="Zip Code"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleInputChange}
      />

      <button type="submit">Create a Game!</button>
    </form>
  );
};

export default NewGameForm;
