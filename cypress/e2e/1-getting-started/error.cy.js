cy.request('https://devxxx.office.nl/Grid/ApplyFilter').as('req1').then((resp1)=>{

                        //expect(JSON.stringify(resp1.body)).to.include('DynamicColumns')
                
                        cy.get('@req1').should('have.property', 'status', 200)
                    })