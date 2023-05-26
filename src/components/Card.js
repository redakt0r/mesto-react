import "../index.css";

function Card({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };
  return (
    <li className="cards__item">
      <article className="card">
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleCardClick}
        />
        <div className="card__wrapper">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-wrapper">
            <button
              className="button card__like-button"
              type="button"
              aria-label="Лайк."
            />
            <p className="card__like-counter">{card.likes.length}</p>
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
}

export default Card;
