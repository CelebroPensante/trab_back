// ./controllers/supplierController.js

class SupplierController {
    constructor(SupplierService) {
        this.SupplierService = SupplierService;
    }

    // Método para criar um novo fornecedor
    async createSupplier(req, res) {
        const { name, email, phone, address, productId } = req.body;
        try {
            const newSupplier = await this.SupplierService.create(name, email, phone, address, productId);
            res.status(200).json(newSupplier);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao gravar o novo fornecedor.' });
        }
    }

    // Método para listar todos os fornecedores
    async findAllSuppliers(req, res) {
        try {
            const allSuppliers = await this.SupplierService.findAll();
            res.status(200).json(allSuppliers);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao localizar todos os fornecedores.' });
        }
    }

    // Método para buscar um fornecedor pelo nome
    async findSupplierByName(req, res) {
        const { name } = req.query;
        try {
            const supplier = await this.SupplierService.findByName(name);
            res.status(200).json(supplier);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao localizar o fornecedor.' });
        }
    }

    // Método para atualizar um fornecedor pelo nome
    async updateSupplierByName(req, res) {
        const { name, email, phone, address, productId } = req.body;
        try {
            const updatedSupplier = await this.SupplierService.updateByName(name, email, phone, address, productId);
            res.status(200).json(updatedSupplier);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao atualizar o fornecedor.' });
        }
    }

    // Método para deletar um fornecedor
    async deleteSupplier(req, res) {
        const { id } = req.body;
        try {
            const deletedSupplier = await this.SupplierService.delete(id);
            res.status(200).json(deletedSupplier);
        } catch (error) {
            res.status(500).json({ error: 'Ocorreu um erro ao deletar o fornecedor.' });
        }
    }
}

module.exports = SupplierController;