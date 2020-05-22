import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import { Spin } from 'antd';
import { Input, Container } from './styles';
import Submit from '../../styles/components/submit';

import { charactersRequest } from '../../store/modules/characters/actions';

function SearchCharacter() {
  const dispatch = useDispatch();

  function handleSubmit({ name }, setSubmitting) {
    dispatch(charactersRequest({ nameStartsWith: name }));
    setSubmitting(false);
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Input
              type="text"
              name="name"
              status={errors.name}
              placeholder={
                errors.name
                  ? 'Campo Obrigatório'
                  : 'Digite o nome do seu personagem favorito!'
              }
            />
            <Submit
              disabled={isSubmitting}
              style={{ minWidth: '80px', height: '34px' }}
            >
              {isSubmitting ? <Spin size="small" /> : 'Procurar'}
            </Submit>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default memo(SearchCharacter);
