import {Modal, Button} from "react-bootstrap";


const RemoveTaskAlert = ({deleteTask, show, taskText,hideAlert}) => {


    return (
        <>


            <Modal show={show}>
                <Modal.Header closeButton onClick={hideAlert}>
                    <Modal.Title>DeleteTask</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the task '{taskText}'?

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={hideAlert} variant="secondary">
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