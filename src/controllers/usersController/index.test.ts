import { Request } from "express";
import UsersController from "."
import { makeMockResponse } from "../../mocks/nickResponse";


describe('Users Controller', () => {
    const userControler = new UsersController();
    const mockReqest = {} as Request;
    const MockResponse = makeMockResponse();

    it('Should list 4 users', () => {
        userControler.getUsers( mockReqest,MockResponse);

        expect(MockResponse.state.status).toBe(200);
        expect(MockResponse.state.json).toHaveLength(4);
    });

    it("Should create a new user", () => {

        mockReqest.body = {
            name: 'Novo usuário'
        }

        userControler.createUser(mockReqest, MockResponse);

        expect(MockResponse.state.status).toBe(201);
        expect(MockResponse.state.json).toMatchObject({message:"usuário Novo usuário criado com sucesso."})

    })

    it("shouldn't create a user with a empty name", () => {
        mockReqest.body = {
            name: ''
        }
        
        userControler.createUser(mockReqest,MockResponse);

        expect(MockResponse.state.status).toBe(403);
        expect(MockResponse.state.json).toMatchObject({message:"Não é possível criar usuários sem um nome!"});
    })
})