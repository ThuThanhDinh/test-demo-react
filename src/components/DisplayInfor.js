import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render ')
//         // props : properties : tai san

//         //template + logic js = component
//         let { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 {true && <>
//                     {listUsers.map((user, index) => {
//                         return (

//                             <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                 <div>
//                                     <div>My name is {user.name} </div>
//                                     <div>My age is {user.age}</div>
//                                 </div>
//                                 <div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                 </div>
//                                 <hr />
//                             </div>


//                         )
//                     })}


//                 </>}



//             </div>



//         )
//     }
// }

const DisplayInfor = (props) => {

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    let { listUsers } = props;


    useEffect(() => {
        if (listUsers.length === 0) {
            alert('you deleted all users')
        }
    }, [listUsers])
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>
            {isShowHideListUser && <>
                {listUsers.map((user, index) => {
                    return (

                        <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                            <div>
                                <div>My name is {user.name} </div>
                                <div>My age is {user.age}</div>
                            </div>
                            <div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                            </div>
                            <hr />
                        </div>


                    )
                })}


            </>}
        </div>
    )
}
export default DisplayInfor;