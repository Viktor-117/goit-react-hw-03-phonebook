import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from 'components/ListItem/ListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          ></ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func.isRequired,
};
