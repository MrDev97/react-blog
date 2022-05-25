import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { removePost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const DeletePost = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = () => {
    dispatch(removePost(props.id));
    setShow(false);
  };

  return (
    <>
      <Button
        className='my-2 mw-2'
        variant='outline-danger'
        onClick={handleShow}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are You sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this Post from the app.
          <br />
          Are You sure You want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Link to={`/`}>
            <Button variant='danger' onClick={handleRemove}>
              Remove
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePost;
