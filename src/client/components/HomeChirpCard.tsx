import * as React from 'react';
import { IChirp } from '../utils/types';
import { useHistory } from 'react-router-dom';

const HomeChirpCard: React.FC<HomeChirpCardProps> = props => {

    const history = useHistory();

    return (
        // <h1>Test</h1>
        // <h1>{props.chirp.message}</h1>
        <div className="col-md-6 mx-1">
            <div onClick={() => history.push(`/details/${props.chirp.id}`)} className="card my-2 shadow">
                <div className="card-body text-center">
                    <h4 className="card-title">@{props.chirp.username}</h4>
                    <p className="card-text">{props.chirp.message}</p>
                    {/* Deprecated to use useHistory --  <Link to={`/details/${props.chirp.id}`}>Get Details</Link> */}
                </div>
            </div>
        </div>
    );
};

interface HomeChirpCardProps {
    chirp: IChirp
}

export default HomeChirpCard;