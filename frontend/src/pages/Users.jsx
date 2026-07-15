import Navbar from "../components/Navbar";

function Users(){

    return(

        <>

        <Navbar/>

        <div className="container">

            <h1>Users</h1>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>Hepsi</td>

                        <td>hepsi@gmail.com</td>

                        <td>User</td>

                    </tr>

                </tbody>

            </table>

        </div>

        </>

    )

}

export default Users;