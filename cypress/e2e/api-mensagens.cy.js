describe('Api Adopet',() =>{
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYjc1NWJlMy00ZDJlLTQyYTAtODBjNC0zMzRkNThkMmE4NGEiLCJhZG9wdGVyTmFtZSI6Ik1hdGhldXMiLCJpYXQiOjE3MzE1NTAxOTIsImV4cCI6MTczMTgwOTM5Mn0.w-f_CKT3GJ2mEEOGQ1M01r3ZuBdQjVzvWkkOMMKg7Fs'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET' ,
            url:'https://adopet-api-i8qu.onrender.com/mensagem/1b755be3-4d2e-42a0-80c4-334d58d2a84a' ,
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })
})
})