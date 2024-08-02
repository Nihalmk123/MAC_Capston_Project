import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const Signup = () => {

const [firstname, setFirst] = useState("")
const [lastname, setLastname] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
        firstname,
        lastname,
        email,
        password
    };

    try {
      const response = await fetch('http://localhost:8080/regiter', {
        method: 'POSt',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.data.status) {
        const data = await response.json();
        console.log(data)
      } else {
        alert("error in registration: ")
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error occurred while creating user');
    }
  };


    return (
        <>
        <Layout>
            <h1 className='text-center mt-3'>Register</h1>
            <div className="container w-25 rouded-5 p-2">
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input type="text" value={firstname} onChange={e=>setFirst(e.target.value)} className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fname" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input type="text" value={lastname} onChange={e=>setLastname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lastname" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">City Name</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button>
            </form>
            </div>
            </Layout>

        </>
    )
}

export default Signup


// to get the data from backend

// useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching the posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading posts...</p>
//       )}
//     </div>
//   );
// };
