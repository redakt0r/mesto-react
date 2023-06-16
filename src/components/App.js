import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm ";
import ImagePopup from "./ImagePopup";
import Input from "./Input";
import EditProfilePopup from "./EditProfilePopup";
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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileData(), api.getInitialCards()])
      .then(([profileData, cardsData]) => {
        setCurrentUser(profileData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

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

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    !isLiked
      ? api
          .putLike(card)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          })
      : api
          .deleteLike(card)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card)
      .then(() => {
        setCards((cardsList) =>
          cardsList.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const handleUpdateUser = (data) => {
    api
      .patchProfileData(data)
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);
        alert(err);
      })
      .then(() => closeAllPopups());
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
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
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
