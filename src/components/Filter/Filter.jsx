import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import {getFilter} from '../../redux/selectors';
import { filter } from '../../redux/filterSlice';

export const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onFilter = ({target}) => {
        dispatch(filter(target.value));
    }
   
    return (
        <div className={css.box}>
            <label className={css.contactLabel}>
            Find contacts by name
            </label>
            <input
            className={css.field}
            type="text"
            name="filter"
            value={value}
            onChange={onFilter}
           />
        </div>
    )
}