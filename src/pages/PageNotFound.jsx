import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/">Back to home</Link>
        </div>
    );
}

