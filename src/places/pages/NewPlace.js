import React, { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './NewPlace.css';


const NewPlace = () => {
    const titleInputHandler = useCallback(
      (is, value, isValid) => {

      }, []);

    const descriptionInputHandler = useCallback(
      (is, value, isValid) => {

      }, []);

    return <form className="place-form">
      <Input
        id="input"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="textarea"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid title"
        onInput={descriptionInputHandler}
      />
    </form>
}

export default NewPlace;
