import { useRef } from "react";
import PopupWithForm from "./PopupWithForm ";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      submitButtonText={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className={`popup__input popup__input_name_avatar`}
            name={"avatar"}
            placeholder={"Ссылка на картинку"}
            type={"url"}
            required
            ref={avatarRef}
          />
          <span
            className={`popup__input-error popup__input-error_type_avatar`}
          />
        </>
      }
    />
  );
}

export default EditAvatarPopup;
