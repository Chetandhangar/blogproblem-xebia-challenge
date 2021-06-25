
import './App.css';
import { Header } from './components/Header/HeaderComponent';
import { Home } from './components/Home/HomeComponent';
import { Blogs } from './components/Blogs/BlogsComponent';
import { BlogDetails } from './components/Blogs/BlogDetailsComponent'
import { useBlogs } from './contexts/blog-contexts'
import  { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {

  const {blogs} = useBlogs()

  const BlogWithTitle = ({match}) =>{
    console.log(match)
    return(
      <BlogDetails blog={blogs.filter((blog) => blog.title === match.params.blogTitle)[0]}/>
    )
  }
 

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/blogs/:blogTitle' component={BlogWithTitle}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
