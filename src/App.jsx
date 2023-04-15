import * as React from 'react'



const welcome ={
  greeting: "Hey",
  title: "React"
}

// Add a debugger statement to stop the debugger at this point
// debugger;

const  App = () => {
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>

      
      <h1>
        {welcome.greeting}  {welcome.title}
      </h1>


    <Search />
      <hr />
      <List  list={stories}/>

    </div>
  );
}

const  List = (props) => 
  (
    <ul>
      {props.list.map(
        (item) => (
         <Item  key={item.objectID} item={item}/>
          // <li key={item.objectID}>
          //   <span>
          //     <a href={item.url}>{item.title}</a>
          //   </span>
          //   <span>{item.author}</span>
          //   <span>{item.num_comments}</span>
          //   <span>{item.points}</span>
          // </li>
        )
      )}
    </ul>
  );

  const Item =(props) =>(
 
    <li>
      <span>
        <a hrer={props.item.url}>{props.item.title}</a>
      </span>

      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>



    </li>
  )


  const Search = () => {
    // perform a task in between
   const handleChange =(event)=>{
    console.log(event)

    console.log(event.target.value);
   }
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onBlur={handleChange} onChange={handleChange}/>
      </div>
    );
  };



export default App
