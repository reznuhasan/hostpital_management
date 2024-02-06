import Styles from "../Styles/ErrorPage.module.css"
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
  return (
    <div className={Styles.component}>
        <h1>OOPS! Something went wrong</h1>
        <h1>Status Code:{error.status},Page:{error.statusText}</h1>
    </div>
  )
}

export default ErrorPage