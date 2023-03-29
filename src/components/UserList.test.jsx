import { screen, render, within } from '@testing-library/react'
import UserList from './UserList'

const renderComponent=()=>{

    const users = [
        { name: 'ritik', email: 'ritik@gmail.com' },
        { name: 'ankit', email: 'ankit@gmail.com' }
    ];

    render(<UserList users={users} />)

    return {
        users
    };
}

test('render one row per user', () => {

   

    // Render the Component
    // const { container } =
    renderComponent();

    // Find All the rows in the table
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    // const rows = container.querySelectorAll('tbody tr');

    // Assertion : Correct Number of rows in the table
    expect(rows).toHaveLength(2);

})

test('render the email and name of each user', () => {

    // const users = [
    //     { name: 'ritik', email: 'ritik@gmail.com' },
    //     { name: 'ankit', email: 'ankit@gmail.com' },
    // ];

    // render(<UserList users={users} />)

    const {users}=renderComponent();

    // screen.logTestingPlaygroundURL();
    for (let user of users) {

        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }


})