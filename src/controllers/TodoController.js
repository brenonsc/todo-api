const { Todos } = require('../models')

class TodoController {
    async index(req, res) {
        try {
            const todos = await Todos.findAll()
            return res.status(200).json(todos)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    async store(req, res) {
        try {
            const { title, description, status } = req.body
            const todo = await Todos.create({ title, description, status })
            return res.status(201).json(todo)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    async show(req, res) {
        try {
            const { id } = req.params
            const todo = await Todos.findByPk(id)
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' })
            }
            return res.status(200).json(todo)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    async update(req, res) {
        try {
            const { id } = req.params
            const { title, description, status } = req.body
            const todo = await Todos.findByPk(id)
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' })
            }
            todo.title = title
            todo.description = description
            todo.status = status
            await todo.save()
            return res.status(200).json(todo)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    
    async delete(req, res) {
        try {
            const { id } = req.params
            const todo = await Todos.findByPk(id)
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' })
            }
            await todo.destroy()
            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

module.exports = new TodoController()