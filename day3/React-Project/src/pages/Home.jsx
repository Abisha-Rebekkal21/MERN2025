import React from 'react'

const Home = ({items}) => {
  return (
    <div>
        <h3>List of fruit: </h3>
        <ul>
            {items.map((fruit) => <li>{fruit}</li>)}
        </ul>
    </div>
  )
}

export default Home