import React, { useState } from 'react'

const UserForm = ({ onUserAdd }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        onUserAdd({
            name,
            email
        })

        setName('');
        setEmail('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button>Add User</button>
            </form>
        </div>
    )
}

export default UserForm
