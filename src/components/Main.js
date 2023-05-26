import "../index.css";
import { api } from "../utils/Api";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("не загружено...");
  const [userDescription, setUserDescription] = useState("не загружено...");
  const [userAvatar, setUserAvatar] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileData(), api.getInitialCards()])
      .then(([profileData, cardsData]) => {
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return (
    <>
      <main className="main-content">
        <section className="profile">
          <button
            className="button profile__edit-button profile__edit-button_aim_avatar"
            onClick={onEditAvatar}
          >
            <img src={userAvatar} alt="Аватар." className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button profile__edit-button profile__edit-button_aim_info"
              type="button"
              aria-label="Редактировать."
              onClick={onEditProfile}
            />
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button
            className="button profile__card-button"
            type="button"
            aria-label="Добавить."
            onClick={onAddPlace}
          />
        </section>
        <section className="cards" aria-label="Фотогалерея.">
          <ul className="cards__list">
            {cards.map((card) => {
              return (
                <Card key={card._id} card={card} onCardClick={onCardClick} />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
