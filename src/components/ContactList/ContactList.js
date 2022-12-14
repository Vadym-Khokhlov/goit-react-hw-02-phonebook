import {
  RemoveButton,
  ContactInfo,
  ContactItem,
  Contacts,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>
            <p>{name}</p>
            <p>Number: {number}</p>
          </ContactInfo>
          <RemoveButton onClick={() => onDeleteContact(id)}>
            remove
          </RemoveButton>
        </ContactItem>
      ))}
    </Contacts>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
