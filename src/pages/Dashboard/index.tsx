import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";


import { Header } from "../../components/Header";
import { TasksList } from "../../components/TasksList";
import { useTasks } from "../../hooks/useTasks";

import { TaskModal } from "./TaskModal";

import { Container } from "./styles";

export function Dashboard(){
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const { idSelected, setIdSelected } = useTasks();

  useEffect(() => {
    if(idSelected){
      setIsTaskModalOpen(true);
    }
  }, [idSelected]);

  function handleOpenTaskModal() {
    setIsTaskModalOpen(true);
  }

  function handleCloseTaskModal() {
    setIsTaskModalOpen(false);
    setIdSelected(null);
  }

  return (
    <>
      <Header onOpenTaskModal={handleOpenTaskModal} />
      <Container>
        <h1>Hi there.</h1>
        <TasksList />
        <TaskModal 
          onRequestClose={handleCloseTaskModal} 
          isOpen={isTaskModalOpen} 
        />
        <Footer />
      </Container>
    </>
  )
}