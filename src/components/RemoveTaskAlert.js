import {Modal, Button} from "react-bootstrap";


const RemoveTaskAlert = ({deleteTask, show}) => {


    return (
        <>


            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>DeleteTask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this task?

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                        Close
                    </Button>
                    <Button onClick={deleteTask}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemoveTaskAlert;