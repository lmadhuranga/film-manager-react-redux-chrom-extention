import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
const FilmForm = ({film, onSave, onChange, loading, errors}) => {
    console.log('mad_msg__film',film)
    return (
        <form >
            <h1>Add Movie</h1>
            <TextInput
                name="name"
                label="Name"
                onChange={onChange}
                placeholder="Name"
                value={film.name}
                error='error_name'
            />

            <TextInput
                name="size"
                label="Size"
                onChange={onChange}
                placeholder="Size"
                value={film.size}
                error='error_size'
            />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Save...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};
FilmForm.propTypes = {
    film: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object,
};
export default FilmForm;