import Header from "./Header";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm ";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"profile"}
          submitButtonText={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="popup__input popup__input_name_name"
                name="name"
                placeholder="Твое имя"
                type="text"
                minLength={2}
                maxLength={40}
                required
              />
              <span className="popup__input-error popup__input-error_type_name" />
              <input
                className="popup__input popup__input_name_about"
                name="about"
                placeholder="Какова твоя профессия"
                type="text"
                minLength={2}
                maxLength={200}
                required
              />
              <span className="popup__input-error popup__input-error_type_about" />
            </>
          }
        />
        <PopupWithForm
          title={"Новое место"}
          name={"cards"}
          submitButtonText={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="popup__input popup__input_name_place"
                name="place"
                placeholder="Название"
                type="text"
                minLength={2}
                maxLength={30}
                required
              />
              <span className="popup__input-error popup__input-error_type_place" />
              <input
                className="popup__input popup__input_name_link"
                name="link"
                placeholder="Ссылка на картинку"
                type="url"
                required
              />
              <span className="popup__input-error popup__input-error_type_link" />
            </>
          }
        />
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          submitButtonText={"Сохранить"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input
                className="popup__input popup__input_name_avatar"
                name="avatar"
                placeholder="Ссылка на картинку"
                type="url"
                required
              />
              <span className="popup__input-error popup__input-error_type_avatar" />
            </>
          }
        />
        <PopupWithForm
          title={"Вы уверены?"}
          name={"submit"}
          submitButtonText={"Да"}
          onClose={closeAllPopups}
        />
        <ImagePopup />
      </div>
    </>
  );
}

export default App;
