import * as React from 'react';
import { useState, useEffect } from 'react';
import { IChirp } from '../utils/types';

import HomeChirpCard from './../components/HomeChirpCard';


// Need to add to pages for routes
// /
// /details/:id
// /admin/:id
// /compose

const Home: React.FC<HomeProps> = () => {

    const [chirps, setChirps] = useState<IChirp[]>([]);

    useEffect(() => {
        (async () => {
            let res = await fetch('/api/chirps');
            let chirps = await res.json();
            setChirps(chirps);
        })();
    }, [])

    return (
        // <div>
        //     <h1 className="text-center">Home View</h1>
        // </div>

        //shorthand vscode = main.container>section.row.my-2.justify-content-center
        <main className="container">
            <section className="row my-2 justify-content-center">
                {chirps.map(chirp => (
                    // <h1>{chirp.message}</h1>
                    <HomeChirpCard key={`chirp-card-home-${chirp.id}`} chirp={chirp} />
                ))}
            </section>
        </main>
    );
};



interface HomeProps { }

export default Home;