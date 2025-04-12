import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <>
      {visibleContacts.length === 0 ? (
        <div className={css.title_wrapper}>
          <span className={css.title}>There is no contact...</span>
        </div>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li className={css.wrapper} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
