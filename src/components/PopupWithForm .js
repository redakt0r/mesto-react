function PopupWithForm({
  title,
  name,
  submitButtonText,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup popup_aim_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_aim_${name}`}
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className={`button popup__save-button popup__save-button_aim_${name}`}
            type="submit"
            aria-label="Сохранить."
          >
            {submitButtonText}
          </button>
        </form>
        <button
          className={`button popup__close-button popup__close-button_aim_${name}`}
          type="button"
          aria-label="Закрыть."
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default PopupWithForm;
