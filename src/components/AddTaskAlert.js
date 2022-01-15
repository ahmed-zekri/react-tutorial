import {useState} from "react";
import {Modal, Button, Form, DropdownButton, Dropdown} from "react-bootstrap";


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
                        <Form.Select id="dropdown-basic-button" title="Days" value={day} onChange={(e) => setDay(e.target.value)}>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </Form.Select>
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