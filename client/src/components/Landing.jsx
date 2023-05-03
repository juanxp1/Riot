import { Link } from "react-router-dom";
import s from '../styles/Landing.module.css'


export default function Landing() {

    return (
        <div className={s.container}>
            <div className={s.box}>
                <Link to='/Home'>
                    <button> Home </button>
                </Link>
            </div>
        </div>
    )

}
