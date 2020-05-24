import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';
import {
  Input,
  Label,
  Container,
  Content,
  Title,
  Text,
  Warning,
} from './styles';
import Submit from '../../styles/components/submit';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ publicKey, privateKey }) {
    dispatch(signInRequest(publicKey, privateKey));
  }

  return (
    <Container>
      <Content>
        <Title>
          VOCÊ AINDA NÃO TEM CREDENCIAIS VÁLIDAS PARA ACESSAR OS RECURSOS DA API
          MARVEL
        </Title>
        <Text>
          Por favor preencha os campos do formulário com suas chaves para que
          possamos credenciar seu acesso.
        </Text>
        <br />
        <Text>
          Se você não sabe sobre o que se tratam estas chaves, por favor acesse:{' '}
          <a
            href="https://developer.marvel.com/documentation/getting_started"
            rel="noopener noreferrer"
            target="_blank"
          >
            MARVEL.COM
          </a>
        </Text>
      </Content>
      <Content>
        <Formik
          initialValues={{
            publicKey: '',
            privateKey: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.publicKey) {
              errors.publicKey = 'required';
            }
            if (!values.privateKey) {
              errors.privateKey = 'required';
            }
            return errors;
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ errors }) => (
            <Form>
              <Label htmlFor="publicKey">Chave Pública</Label>
              <Input
                type="text"
                name="publicKey"
                status={errors.publicKey}
                placeholder={
                  errors.publicKey
                    ? 'Campo Obrigatório'
                    : 'Digite sua chave pública!'
                }
              />

              <Label htmlFor="privateKey">Chave Privada</Label>
              <Input
                type="text"
                name="privateKey"
                status={errors.privateKey}
                placeholder={
                  errors.privateKey
                    ? 'Campo Obrigatório'
                    : 'Digite sua chave Privada!'
                }
              />

              <Submit style={{ minWidth: '80px', height: '34px', margin: 0 }}>
                Entrar
              </Submit>
            </Form>
          )}
        </Formik>
        <Warning>
          * Não se preocupe, suas chaves ficarão disponíveis apenas para o seu
          navegador atual e apenas durante seu acesso.
        </Warning>
      </Content>
    </Container>
  );
}
