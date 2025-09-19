// import axios from 'axios';
// const API_URL = 'http://192.168.1.8:8080/api/v1';

const mockProducts = [
    {
        id: 1,
        name: 'Pizza Nordestina',
        description: 'A clássica com mandioca, carne seca e queijo',
        price: 35.60,
        imageUrl: 'https://images.unsplash.com/photo-1574071311894-0df5275e5b7e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
     {
    id: 2,
    name: 'Hambúrguer Gourmet',
    description: 'Pão de brioche, blend de carnes nobres, queijo cheddar, bacon, cebola caramelizada e maionese da casa.',
    price: 45.50,
    imageUrl: 'https://images.unsplash.com/photo-1568901968875-e9db7e62a32c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Salada de Frango Grelhado',
    description: 'Mix de folhas verdes, tomate cereja, pepino, milho, frango grelhado e molho de mostarda e mel.',
    price: 28.75,
    imageUrl: 'https://images.unsplash.com/photo-1628104595825-f7169f44f910?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Lasanha à Bolonhesa',
    description: 'Camadas de massa fresca, molho bolonhesa, presunto, queijo e um toque de parmesão gratinado.',
    price: 38.00,
    imageUrl: 'https://images.unsplash.com/photo-1608935408544-d897c9b0c797?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export const fetchAllProducts = async (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 500);
    });
};

export const fetchProductById = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = mockProducts.find(p => p.id == id);
            if(product) {
                resolve(product)
            } else {
                reject(new Error("Produto não encontrado"));
            }
        }, 500);
    });
};
