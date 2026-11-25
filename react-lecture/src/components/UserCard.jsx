function UserCard({UserData})
{
    return (
    <ul>
            <ol>ФИО: {UserData.fullName} </ol>
            <ol>Логин : {UserData.login}</ol>
            <ol>Почта : {UserData.email}</ol>
            <ol>ПОЛ : {UserData.male}</ol>
            <ol>Пароль : {UserData.pass}</ol>
    </ul>
    );
}

export default UserCard;