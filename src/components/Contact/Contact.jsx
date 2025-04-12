import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteBtnClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.text_container}>
        <span className={css.item}>
          <BsPersonFill className={css.icon} />
          {contact.name}
        </span>

        <span className={css.item}>
          <BsTelephoneFill className={css.icon} />
          {contact.number}
        </span>
      </div>

      <button className={css.btn} onClick={handleDeleteBtnClick}>
        Delete
      </button>
    </>
  );
}
