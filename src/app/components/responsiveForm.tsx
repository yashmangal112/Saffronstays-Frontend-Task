import styles from "../styles/responsiveForm.module.css"
import { Button } from "./button"

export const ResponsiveForm = () => {
    return (
        <div className={styles.responsiveFormContainer}>
            <div>
                <p>₹1,49,086</p>
                <h2>₹1,00,086/Night</h2>
            </div>
            <Button text="Check Availability" disabled={false} bgColor="buttonSquare" />
        </div>
    )
}