// class component
// function component

import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: '1', name: 'thanh', age: '20' },
//             { id: '2', name: 'nhan', age: '23' },
//             { id: '3', name: 'tinh', age: '16' }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     //JSX
//     render() {
//         //DRY dont repeat yourself

//         return (
//             <>
//                 <div className='a'>
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /> <br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className='b'>

//                 </div>
//             </>
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'thanh', age: '20' },
            { id: 2, name: 'nhan', age: '23' },
            { id: 3, name: 'tinh', age: '16' }
        ]
    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return (
        <>
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>

            </div>
        </>
    )
}


export default MyComponent;