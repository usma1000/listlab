import React from 'react';

const AddMovieForm = (props) => {
    return (
        <form>
            <input type="text" required placeholder="Search by title..." />
            <button type="submit">Search</button>
        </form>
    );
}

export default AddMovieForm;