const products = [ 
    {
        id: '1',
        name: 'Pelota Al-Rihla',
        price: 18999,
        category: 'futbol',
        image: 'https://i.imgur.com/6Akb49W.png',
        stock: 30,
        description: 'Pelota Oficial del Mundial de Qatar 2022'
    },
    {
        id: '2',
        name: 'Pelotas Topper',
        price: 3919,
        category: 'tenis',
        image: 'https://i.imgur.com/CvBH6jn.png',
        stock: 30,
        description: 'Contiene 3 pelotas de Tenis selladas'
    },
    {
        id: '3',
        name: 'Remo ajustable SereneLife',
        price: 26640,
        category: 'supsurf',
        image: 'https://i.imgur.com/CTpL3kX.png',
        stock: 20,
        description: 'Remo de carbono ajustable de 3 ejes'
    },
    {
        id: '4',
        name: 'Camiseta NBA LA Lakers',
        price: 9000,
        category: 'basquet',
        image: 'https://i.imgur.com/zFGx2bF.png',
        stock: 20,
        description: 'Camiseta Talle XL Negra Nro 23 de LeBron James'
    },
    {
        id: '5',
        name: 'Guantes Predator Edge Match',
        price: 17999,
        category: 'futbol',
        image: 'https://i.imgur.com/gEW8GVz.png',
        stock: 25,
        description: 'Guantes de Arquero resistentes para controlar el partido'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1500)
    })
}

export const getProductsByCategory = (categoryID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryID))
        },1500)
    })
}

export const getProductByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 1500)
    })
}