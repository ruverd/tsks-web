import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { useTasks } from '../../../hooks/useTasks';

import closeImg from '../../../assets/close.svg';

import { Container } from './styles';

Modal.setAppElement('#root');

interface ITaskModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

export function TaskModal({ onRequestClose, isOpen }: ITaskModalProps){
  const { saveTask, taskInfo, idSelected, setIdSelected } = useTasks();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(taskInfo?.title || '');
    setDescription(taskInfo?.description || '');
  }, [taskInfo]);

  async function handleSaveTask(event: FormEvent) {
    event.preventDefault();

    try {
      await saveTask({
        title, 
        description
      });
  
      setTitle('');
      setDescription('');
  
      onRequestClose();
    } catch (error) {
      console.error(error);

      toast('❌   All fields are required!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "dark",
        progress: undefined
      });
    }
  }

  function handleCloseModal() {
    
      setTitle('');
      setDescription('');
      setIdSelected(null);
  
      onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Task"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close Modal"/>
      </button>
      <Container onSubmit={handleSaveTask}>
        <h2>{idSelected ? `Edit Task` : `New Task`}</h2>

        <input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={event => setDescription(event.target.value)}
        />

        <button type="submit">Save</button>
      </Container>
    </Modal>
  );
}