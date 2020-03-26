import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

// Need to add to pages for routes
// /compose

const Compose: React.FC<ComposeProps> = () => {

    const history = useHistory();

    const [username, setUsername] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log('Test');
        console.log({username, message });
        let res = await fetch ('/api/chirps', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body : JSON.stringify({username, message})
        })
        if (res.ok){
            history.push('/');
        }else{
            console.log('something went wrong:(')
        }
        // setUsername('');
        // setMessage('');
    }

    return (
        // <div>
        //     <h1 className="text-center">Compose View</h1>
        // </div>

    <main className="container">
        <section className="row my-2 justify-content-center">
            <div className="col-md-8">
                <form className="form-group p3 shadow border rounded">
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={handleUsernameChange} placeholder="Who 'dat chirpin'?" id="username" type="text" className="form-control" />
                    <label htmlFor="message">Message</label>
                    <textarea value={message} onChange={handleMessageChange} rows={8} placeholder="What's 'dat you say?" className="form-control" name="message" id="message"></textarea>
                    <button onClick={submitChirp} className="btn btn-outline-primary btn-block mt3 w-75 mx-auto shadow-sm">Chirp It!</button>
                </form>
            </div>
        </section>
    </main>
    );
};


interface ComposeProps { }

export default Compose;