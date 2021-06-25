import '../Header/header.css';

export function Header() {
  return (
    <div className="header-component">
           
<nav className="navigation container">
    <div className="nav-brand"> Chetan Dhangar Blogs</div>
    <ul className="list-non-bullet nav-pills">
        <li className="list-item-inline">
            <a className="link " href="/">| Home |</a>
        </li>
        <li className="list-item-inline">
            <a className="link " href="/blogs">| Blogs |</a>
            
        </li>
        
    </ul>
</nav>
    </div>
  );
}


