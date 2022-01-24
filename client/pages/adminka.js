import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/appStyle.js';
import axios from 'axios';
//import { Grow, Grid, Container} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
export default function Home() {
    const [login, setLogin] = useState({
        username: 'zmn',
        password: 'zmn2022',
    });
    const [loginInp, setLoginInp] = useState('');
    const [passwordInp, setPasswordInp] = useState('');
    const [imag, setImag] = useState(null);

//create a function that will get data from the database and display it on the page
    const isLoggedIn = (log, pass) =>{
        return (log === login.username && pass === login.password);
    }
                
    var config = {
        method: 'POST',
        url: 'https://data.mongodb-api.com/app/data-cuclk/endpoint/data/beta/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'qdYpCT9UksCtQJPe7keox3AS4IBgl32y09SlOGz1nzgrZqTYL9MBAr1I426uSnPn'
        },
        data : {
            "collection": "posts",
            "database": "allSlides",
            "dataSource": "Cluster0",
            "projection": {
                "_id": 1,
                "slide": 1,
                "title": 1,
                "description": 1,
                "image": 1,
                "link": 1,
                "date": 1,
                "author": 1,
                "tags": 1,
                "category": 1,
            }
        }
    };
    //  async function getData(){        
    //     fetch('http://localhost:5000/getallslides', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => console.log(err));
    // }
  async function postToDatabase(e) {
    console.log(e);
    fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: e.target[0].value,
        description: e.target[1].value,
        link: e.target[2].value,
        image: imag,
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  if(loginInp === login.username && passwordInp === login.password){
      return (
        <div style={styles.container}>
            <Head>
                <title>Create a post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={styles.main}>
                    <div style={styles.create}>
                        <h2 style={styles.title}>
                            Create a post
                        </h2>
                    
                        <form style={styles.form} method='post' encType='multipart/form-data'>
                            <input style={styles.input} type="text" placeholder="Title" />
                            <textarea style={styles.input} type="text" placeholder="Content" />
                            <input style={styles.input} type="text" placeholder="Link" />
                            <input style={styles.input} type="file" onChange={(e) => setImag(e.target.files[0])}/>
                            <button style={styles.button} type="submit">Submit all data</button>
                        </form>
                    </div>
            </main>
        </div>
      )
   }
    else{
        return(
            <div style={styles.contLog}>
                <Head>
                    <title>Login</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main style={styles.containerLogin}>
                    <h2 style={styles.title}>
                        Login
                    </h2>
                    <form style={styles.form}>
                        <input style={styles.input} type="text" placeholder="Username" onChange={(e)=>setLoginInp(e.target.value)}/>
                        <input style={styles.input} type="password" placeholder="Password" onChange={(e)=>setPasswordInp(e.target.value)}/>
                        <button style={styles.button} type="submit" >Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}
