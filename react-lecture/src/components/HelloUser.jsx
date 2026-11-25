function HelloUser(props)
{
    return(
        <div className="GreetUser">
        <h2>Привет ! {props.name}</h2>
        <h2>Возраст: {props.age ?? " ПУСТО "}</h2>
        </div>
    )
}

export default HelloUser