import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Tooltip } from 'antd';
import { FaEdit } from 'react-icons/fa';

import { Input, Textarea, Form, Label } from './styles';
import Submit from '../../styles/components/submit';
import Button from '../../styles/components/button';

import { charactersUpdate } from '../../store/modules/characters/actions';

function BtnUpdate({ character }) {
  const { name, description } = character;

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.characters.loading);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [visible, setVisible] = useState(false);

  function handleOk() {
    dispatch(
      charactersUpdate({
        ...character,
        name: newName,
        description: newDescription,
      })
    );
  }

  function handleCancel() {
    setNewName(name);
    setNewDescription(description);
    setVisible(false);
  }

  return (
    <>
      <Tooltip placement="left" title="customizar personagem">
        <Button
          className="yellow"
          type="primary"
          onClick={() => setVisible(true)}
        >
          <FaEdit />
        </Button>
      </Tooltip>

      <Modal
        centered
        visible={visible}
        title={`Modificar: ${name}`}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Voltar
          </Button>,
          <Submit
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Modificar
          </Submit>,
        ]}
      >
        <Form>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            value={newName}
            status={!newName ? 'required' : 'default'}
            placeholder={!newName ? 'Obrigatório' : ''}
            name="name"
            onChange={(e) => setNewName(e.target.value)}
          />

          <Label htmlFor="description">Descrição</Label>
          <Textarea
            type="textarea"
            name="description"
            onChange={(e) => setNewDescription(e.target.value)}
          >
            {newDescription}
          </Textarea>
        </Form>
      </Modal>
    </>
  );
}

BtnUpdate.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BtnUpdate;
