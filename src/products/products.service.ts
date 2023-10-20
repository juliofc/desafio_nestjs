import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ProductsClientGrpc, RegisterProductsRpcResponse } from './products.grpc';
import { lastValueFrom } from 'rxjs';
import { CreateProductsDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService implements OnModuleInit {
  private grpcService: ProductsClientGrpc;

  constructor(
    @Inject('PRODUCTS_PACKAGE')
    private grpcPackage: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.grpcPackage.getService('ProductService');
  }

  async create(dto: CreateProductsDto) {
    const createdRemoteProducts = await lastValueFrom(
        this.grpcService.createProduct({ ...dto }),
    );

    return createdRemoteProducts;
  }

  async findAll() {
    const result = await lastValueFrom(this.grpcService.findProducts({}));

    return result;
  }
}
