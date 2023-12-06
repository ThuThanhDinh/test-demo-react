import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {

    const [showModalcreateUser, setshowModalcreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => { setshowModalcreateUser(true) }}>
                        Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    table users
                    <ModalCreateUser
                        show={showModalcreateUser}
                        setShow={setshowModalcreateUser}
                    />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;