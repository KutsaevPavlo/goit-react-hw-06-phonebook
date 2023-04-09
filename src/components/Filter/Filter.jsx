import { StyledFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { SelectFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  // getFilter = state => state.filter;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(SelectFilter(target.value));
    //action SelectFilter from filterSlice
  };

  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </StyledFilter>
    </>
  );
};
