function UserList({users})
{
    return (
        <div className="user-list">
            <ul>
            {
            users.map(user => (<ul key = {user.isOnline}>
                <p>id: {user.id}</p>
                <p>ФИО: {user.fullName}</p> 
                <p>Логин:{user.login}</p> 
                <p>Почта:{user.email}</p>
                <p>Пол:{user.male}</p>
                <p>Пароль:{user.pass}</p>
                <p>Город:{user.city}</p>
                <p>В сети:{user.isOnline ? "онл" : "офф"}</p> 
                </ul>))
            }
            </ul>
            </div>
    );

}

export default UserList;