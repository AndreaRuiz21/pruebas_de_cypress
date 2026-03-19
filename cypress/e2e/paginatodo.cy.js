describe('Pruebas de la pagina TO DO', () => {
  it('Comprobar que se pueden crear tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
  })

  it('Marcar una tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Tarea 2{enter}")
    cy.get('[data-testid="todo-item-toggle"]')
    .click()
  })
    it('Desmarcar una tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
    cy.get('[data-testid="todo-item-toggle"]')
    .click()
    cy.get('[data-testid="todo-item-toggle"]')
    .click()
  })

    it('Editar una tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("ASDFG{enter}")
   cy.get('[data-testid="todo-item-label"]')
    .dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]')
    .clear().type("Tarea 4{enter}")
  })
  
    it('Eliminar una tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Tarea 5{enter}")

  })

      it('Filtrar Tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('[data-testid="text-input"]').type("Tarea 6{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.1{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.2{enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 6.3{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]')
    .click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]')
    .click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a')
    .click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a')
    .click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a')
    .click()
    
  })

})

