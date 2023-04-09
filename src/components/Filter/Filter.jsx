import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export function Filter({ handleChange }) {
  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
        />
      </StyledFilter>
    </>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
