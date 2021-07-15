const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Bruno",
                    last: "Santos"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/62.jpg"
                },
                login: {
                    username: "brnms"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue( mockResponse)
}