import "../index.css";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <>
      <main className="main-content">
        <section className="profile">
          <button
            className="button profile__edit-button profile__edit-button_aim_avatar"
            onClick={onEditAvatar}
          >
            <img src="#" alt="Аватар." className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">Жак Ив Кусто</h1>
            <button
              className="button profile__edit-button profile__edit-button_aim_info"
              type="button"
              aria-label="Редактировать."
              onClick={onEditProfile}
            />
            <p className="profile__occupation" />
          </div>
          <button
            className="button profile__card-button"
            type="button"
            aria-label="Добавить."
            onClick={onAddPlace}
          />
        </section>
        <section className="cards" aria-label="Фотогалерея.">
          <ul className="cards__list" />
        </section>
      </main>
    </>
  );
}
export default Main;
