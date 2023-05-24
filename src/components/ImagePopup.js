import "../index.css";

function ImagePopup() {
  return (
    <>
      <div className="popup popup_aim_picture">
        <div className="popup__wraper">
          <img src="#" alt="." className="popup__picture" />
          <h2 className="popup__caption">картинка</h2>
          <button
            className="button popup__close-button popup__close-button_aim_picture"
            type="button"
            aria-label="Закрыть."
          />
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
