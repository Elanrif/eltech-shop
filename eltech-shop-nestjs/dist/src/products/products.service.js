"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("@nestjs/typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
let ProductsService = class ProductsService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async create(dto) {
        const currentDate = new Date();
        const category = await this.categoryRepository.findOne({
            where: { id: dto.category?.id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const product = this.productRepository.create({
            ...dto,
            category,
            createdAt: currentDate,
            updatedAt: currentDate,
        });
        return await this.productRepository.save(product);
    }
    async update(id, dto) {
        const product = await this.findOne(id);
        if (!product) {
            return new Error(`Product with id ${id} not found`);
        }
        const category = await this.categoryRepository.findOne({
            where: { id: dto.category?.id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category was not found in database');
        }
        const currentDate = new Date();
        const updateDto = { ...dto, category, updatedAt: currentDate };
        await this.productRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async findAll() {
        return this.productRepository.find();
    }
    async findOne(id) {
        return this.productRepository.findOne({
            where: { id },
        });
    }
    async remove(id) {
        return this.productRepository.delete(id);
    }
    async uploadProductImage(dto) {
        const product = await this.findOne(dto.id);
        if (!product) {
            return new Error(`Product with id ${dto.id} not found`);
        }
        const currentDate = new Date();
        const updateDtoImg = {
            ...product,
            imageUrl: dto.imageUrl,
            updatedAt: currentDate,
        };
        console.log('imageUrl', updateDtoImg);
        await this.productRepository.update(product.id, updateDtoImg);
        return this.findOne(product.id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_2.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map