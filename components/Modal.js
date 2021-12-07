import { Button, Header, Image, Modal as Modalx } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '@/styles/Modal.module.css';

export default function Modal({show, onClose, children, title}) {
    const [isBrowser, setIsBrowser] = useState(false);

    const handleClose = e => {
        e.preventDefault();
        onClose();
    };

    useEffect(() => setIsBrowser(true));

   const modalContent = show ? (
       //console.log(show),
        <Modalx
            onClose={handleClose}
            // onOpen={() => setOpen(true)}
            open={show}
            // trigger={<Button>Show Modalx</Button>}
        >
            <Modalx.Header>{title}</Modalx.Header>
            <Modalx.Content image>
                <Image
                    size='medium'
                    src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
                    wrapped
                />
                <div>{children}</div>
            </Modalx.Content>
            <Modalx.Actions>
                <Button color='black' onClick={handleClose}>
                    Close
                </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    //positive
                />
            </Modalx.Actions>
        </Modalx>
    ) : null;


//     const modalContent = show ? (
//         <div className={styles.overlay}>
//           <div className={styles.modal}>
//             <div className={styles.header}>
//               <a href='#' onClick={handleClose}>
             
//               </a>
//             </div>
//             {title && <div>{title}</div>}
//             <div className={styles.body}>{children}</div>
//           </div>
//         </div>
//       ) : null 

    if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById('modal-root')
        )
      } else {
        return null
      }
}
