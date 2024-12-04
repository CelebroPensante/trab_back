// ./services/supplierService.js

class SupplierService {
    constructor(SupplierModel, ProductModel) {
        this.Supplier = SupplierModel;
        this.Product = ProductModel;
    }

    // Método para criar um novo fornecedor
    async create(name, email, phone, address, productId) {
        try {
            const newSupplier = await this.Supplier.create({
                name: name,
                email: email,
                phone: phone,
                address: address,
                productId: productId
            });
            return newSupplier ? newSupplier : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para retornar todos os fornecedores
    async findAll() {
        try {
            const allSuppliers = await this.Supplier.findAll({
                include: [{
                    model: this.Product,
                    as: 'products'
                }]
            });
            return allSuppliers ? allSuppliers : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para buscar um fornecedor pelo nome
    async findByName(name) {
        try {
            const supplier = await this.Supplier.findOne({
                where: { name: name },
                include: [{
                    model: this.Product,
                    as: 'products'
                }]
            });
            return supplier ? supplier : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para atualizar um fornecedor pelo nome
    async updateByName(name, email, phone, address, productId) {
        try {
            const updatedSupplier = await this.Supplier.update({
                email: email,
                phone: phone,
                address: address,
                productId: productId
            }, {
                where: { name: name }
            });
            return updatedSupplier ? updatedSupplier : null;
        } catch (error) {
            throw error;
        }
    }

    // Método para deletar um fornecedor
    async delete(id) {
        try {
            const deletedSupplier = await this.Supplier.destroy({
                where: { id: id }
            });
            return deletedSupplier ? deletedSupplier : null;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SupplierService;