import { Observable } from 'rxjs'; //reactive x

export interface RegisterProductsRpcResponse {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface RegisterListProductsRpcResponse {
  products: RegisterProductsRpcResponse;
}

export interface ProductsClientGrpc {
  createProduct: (data: {
    name: string;
    description: string;
    price: number;
  }) => Observable<{ product: RegisterProductsRpcResponse }>;
  findProducts: (data: {}) => Observable<RegisterListProductsRpcResponse>;
}
