import "../index.css";
import { api } from "../utils/Api";
import React from "react";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("Жак Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState(
    "https://postimg.cc/06KY38RB"
  );

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
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
                <li className="cards__item">
                  <article className="card">
                    <img
                      src={card.link}
                      alt={card.name}
                      className="card__image"
                    />
                    <div className="card__wrapper">
                      <h2 className="card__title">{card.name}</h2>
                      <div className="card__like-wrapper">
                        <button
                          className="button card__like-button"
                          type="button"
                          aria-label="Лайк."
                        />
                        <p className="card__like-counter">
                          {card.likes.length}
                        </p>
                      </div>
                      <button
                        className="button card__remove-button"
                        type="button"
                        aria-label="Удалить картинку"
                      />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
