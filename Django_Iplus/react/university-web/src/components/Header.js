
function Header() {
    return (
        <header className="app-header">
            <div>
                <p className="eyebrow">Campus portal</p>
                <h1>University Hub Portal</h1>
            </div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/courses">Courses</a>
                <a href="/students">Students</a>
            </nav>
        </header>
    );
}

export default Header;