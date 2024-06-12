import PropTypes from 'prop-types';
import css from "./SearchBox.module.css"

const SearchBox = ({ handleSearch }) => {
    return (
        <div className={css.searchBoxContainer}>
            <p className={css.searchBoxText}>Find contacts by name</p>
            <input className={css.searchBoxInput} onChange={handleSearch} type="text" />
        </div>
    );
};

SearchBox.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBox;
