import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {

    useEffect(() => {
        fetchUsers();
    }, [])

    if (userData) {
        return userData.loading ? (
            <h2>Loading</h2>
        ) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                <h2>Book List</h2>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Publisher</th>
                            <th>ISBN</th>                            
                            <th>Country</th>
                            <th>Media Type</th>                            
                            <th>Release Date</th>
                            <th>No. of Pages</th>                           
                        </tr>
                        {userData.map(data => {
                            return (<tr>
                                <td>{data.name}</td>
                                <td>{data.publisher}</td>
                                <td>{data.isbn}</td>
                                <td>{data.country}</td>
                                <td>{data.mediaType}</td>
                                <td>{data.released}</td>
                                <td>{data.numberOfPages}</td>
                            </tr>)
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)