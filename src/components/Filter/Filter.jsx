import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterByName } from '../../redux/contact/actions';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  console.log('filter', filter);

  const dispatch = useDispatch();
  const handleChange = event => {
    const name = event.target.value;
    dispatch(setFilterByName(name));
    //  filterContacts(value);
  };
  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          className={css.filterInput}
        />
      </label>
    </div>
  );
};
