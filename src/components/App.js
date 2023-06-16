import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm ";
import ImagePopup from "./ImagePopup";
import Input from "./Input";
import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({
    name: "не загружено...",
    about: "не загружено...",
    avatar: "",
  });
  useEffect(() => {
    api
      .getProfileData()
      .then((profileData) => {
        setCurrentUser(profileData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  console.log(currentUser);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
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
                <Input name={"name"} placeholder={"Твое имя"} type={"text"} />
                <Input
                  name={"about"}
                  placeholder={"Какова твоя профессия"}
                  type={"text"}
                />
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
                <Input name={"place"} placeholder={"Название"} type={"text"} />
                <Input
                  name={"link"}
                  placeholder={"Ссылка на картинку"}
                  type={"url"}
                />
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
                <Input
                  name={"avatar"}
                  placeholder={"Ссылка на картинку"}
                  type={"url"}
                />
              </>
            }
          />
          <PopupWithForm
            title={"Вы уверены?"}
            name={"submit"}
            submitButtonText={"Да"}
            onClose={closeAllPopups}
          />
          {selectedCard ? (
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          ) : (
            ""
          )}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
