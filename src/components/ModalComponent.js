import React from 'react'
import { Modal, Button } from 'native-base'

const ModalComponent = ({
  isOpen,
  onClose,
  title,
  children,
  onCancel,
  onConfirm,
  cancelButtonLabel,
  confirmButtonLabel,
}) => {
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
  )
}

export default ModalComponent
