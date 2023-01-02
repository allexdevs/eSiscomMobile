/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Modal, Button } from 'native-base';
import PropTypes from 'prop-types';

function ModalComponent({
  isOpen,
  onClose,
  title,
  onCancel,
  onConfirm,
  cancelButtonLabel,
  confirmButtonLabel,
  children,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              bgColor="red.500"
              onPress={onCancel}
              _pressed={{
                bgColor: 'red.600',
              }}
            >
              {cancelButtonLabel}
            </Button>
            <Button
              bgColor="amber.500"
              onPress={onConfirm}
              _pressed={{
                bgColor: 'amber.600',
              }}
            >
              {confirmButtonLabel}
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

ModalComponent.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  cancelButtonLabel: PropTypes.string,
  confirmButtonLabel: PropTypes.string,
};

ModalComponent.defaultProps = {
  isOpen: false,
  onClose: () => {},
  title: '',
  onCancel: () => {},
  onConfirm: () => {},
  cancelButtonLabel: '',
  confirmButtonLabel: '',
};

export default ModalComponent;
