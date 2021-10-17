import { Fragment } from "react/cjs/react.production.min";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.onClose} />;
};
const Overlay = props => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const Modal = props => {
	return (
		<Fragment>
			{ReactDom.createPortal(
				<Backdrop onClose={props.onClose} />,
				document.getElementById("overlay")
			)}
			{ReactDom.createPortal(
				<Overlay>{props.children}</Overlay>,
				document.getElementById("overlay")
			)}
		</Fragment>
	);
};
export default Modal;
