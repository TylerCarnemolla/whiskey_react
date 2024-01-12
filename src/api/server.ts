
const token = '3901c8ba8213afc65e97fb8b5e5199c63e5a92224c107dee'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://whiskey-cabinet.onrender.com/api/whiskeys`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {  
        console.log(JSON.stringify(data))
        console.log('Im here')
        const response = await fetch(`https://whiskey-cabinet.onrender.com/api/whiskeys`,{          
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
        const body = await response.json()
      
        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }
            
        return body
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://whiskey-cabinet.onrender.com/api/whiskeys/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error('Failed to update data on server.')
        }
        
    },
    delete: async(id:string) => {
        const response = await fetch(`https://whiskey-cabinet.onrender.com/api/whiskeys/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
      
        
    }
}