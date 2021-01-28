import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AgeVerification = () => {

    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const goBack=()=>{
      alert("You will redirected back!");
      window.history.back();
  }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Age Verification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are above 21 year of age?
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Yes
          </Button>
                    <Button variant="danger" onClick={goBack}>No</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AgeVerification;
