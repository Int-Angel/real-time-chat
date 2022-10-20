import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='find a user'/> 
        </div>
        <div className='userChat'>
            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt=""/>
            <div className="userChatInfo">
                <span>Nombre</span>
            </div>
        </div>
    </div>
  )
}

export default Search