import { useState } from "react";
import PopupWithForm from "./PopupWithForm ";

function AddPlacePopup({ isOpen, onClose, onAddNewPlace }) {
  const [place, setPlace] = useState();
  const [link, setLink] = useState();

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewPlace({
      place,
      link,
    });
  };

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"place"}
      submitButtonText={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className={`popup__input popup__input_name_place`}
            name={"place"}
            placeholder={"Название"}
            type={"text"}
            required
            value={place}
            onChange={handlePlaceChange}
          />
          <span
            className={`popup__input-error popup__input-error_type_place`}
          />
          <input
            className={`popup__input popup__input_name_link`}
            name={"link"}
            placeholder={"Ссылка на картинку"}
            type={"url"}
            required
            value={link}
            onChange={handleLinkChange}
          />
          <span className={`popup__input-error popup__input-error_type_link`} />
        </>
      }
    />
  );
}

export default AddPlacePopup;
