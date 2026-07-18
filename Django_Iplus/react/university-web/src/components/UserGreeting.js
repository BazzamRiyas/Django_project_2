function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="greeting-block">
            <h1>{isLoggedIn ? 'Welcome back, Ava!' : 'Please sign in'}</h1>
            <p>Everything you need for the next semester is right here.</p>
            {isLoggedIn ? <button>Log out</button> : <button>Register now</button>}
        </div>
    );
}

export default UserGreeting;