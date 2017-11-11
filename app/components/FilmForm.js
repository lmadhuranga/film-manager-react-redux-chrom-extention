import React, {PropTypes} from 'react';
import TextInput from '../common/formElement/TextInput';
const FilmForm = ({film, onSave, onChange, loading, errors}) => {
    return (
        <form >
            <TextInput
                name="name"
                label="Film Name"
                onChange={onChange}
                placeholder="Film Name"
                value={film.name}
                error='{errors.name}'
            />

            <TextInput
                name="size"
                label="Size"
                onChange={onChange}
                placeholder="Size"
                value={film.size}
                error='{errors.size}'
            />

            <TextInput
                name="quality"
                label="Quality"
                onChange={onChange}
                placeholder="quality"
                value={film.quality}
                error='{errors.qualitye}'
            />

            <TextInput
                name="location"
                label="Location"
                onChange={onChange}
                placeholder="location"
                value={film.location}
                error='{errors.location}'
            />

            <TextInput
                name="uploader"
                label="Uploader"
                onChange={onChange}
                placeholder="Uploader"
                value={film.uploader}
                error='{errors.uploader}'
            />

            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Save...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />

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