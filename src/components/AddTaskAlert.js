import {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";


const AddTaskAlert = ({addTask}) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('New task');
    const [day, setDay] = useState('Monday');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} hidden={show}>
           Add task

            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add task</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Task</Form.Label>
                        <Form.Control type="text" placeholder="Enter new task" value={text}
                                      onChange={(e) => setText(e.target.value)}/>
                        <Form.Text className="text-muted">
                            New task will be added to the list
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Day</Form.Label>
                        <Form.Control type="text" placeholder="Password" value={day}
                                      onChange={(e) => setDay(e.target.value)}/>
                    </Form.Group>


                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        addTask(text, day);
                        setShow(false);
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTaskAlert;