function ImagePopup({ card, onClose }) {
  return (
    <>
      <div className={`popup popup_aim_picture ${card ? "popup_opened" : ""}`}>
        <div className="popup__wraper">
          <img src={card.link} alt={card.name} className="popup__picture" />
          <h2 className="popup__caption">{card.name}</h2>
          <button
            className="button popup__close-button popup__close-button_aim_picture"
            type="button"
            aria-label="Закрыть."
            onClick={onClose}
          />
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
