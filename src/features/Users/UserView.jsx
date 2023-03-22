import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchUsers } from './userSlice'
import newId from "../Users/Images/id-card.png"
import logo from "../Users/Images/profile.png"
import mail from "../Users/Images/email.png"
import jobo from "../Users/Images/icons8-work.gif"
import vector from "../Users/Images/Vector.png"

export const UserView = () => {
  const [q, setQ] = useState("");
const [searchTerm] = useState(["name", "email", "occupation"]);


function search(items) {
    return items.filter((item) => {
        return searchTerm.some((newItem) => {
           return (
                item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>
    <div className='nav'> <img src={newId} /> 
    <div className='search'>
       <input
            type="text"
            placeholder="search..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          /><img src={vector} />
      </div>
      </div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length ? (
          <div className='contacts'>
            
          
             {search(user.users).map(user =>(
              <div className="contact-card grid"key={user.id}>
                      <img src={logo} />
                    <div>  <h3>{user.name}</h3> </div>
                      <div className='info-group'>
                      <img src={jobo}></img> <p>{user.occupation}</p>
                      <img src={mail} /> <p>{user.email}</p>
                      </div>
                          
                            
              </div>
            
  
          ))}
            
          </div>
   ): null}

    </div>
    )}

