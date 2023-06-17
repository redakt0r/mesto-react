import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm ";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDesctriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"profile"}
      submitButtonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          className={`popup__input popup__input_name_name`}
          name={"name"}
          placeholder={"Твое имя"}
          type={"text"}
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className={`popup__input-error popup__input-error_type_name`} />
        <input
          className={`popup__input popup__input_name_about`}
          name={"about"}
          placeholder={"Какова твоя профессия"}
          type={"text"}
          required
          value={description}
          onChange={handleDesctriptionChange}
        />
        <span className={`popup__input-error popup__input-error_type_about`} />
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
