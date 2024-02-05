const express = require('express');
const router = express.Router();
const User = require('../models/UserData');

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.destroy({
            where: {
                id: id
            }
        });
        if (deletedUser === 0) {
            res.status(404).send(`User with ID ${id} not found`);
            return;
        }
        res.status(200).send(`User with ID ${id} deleted successfully`);
    } catch (error) {
        res.status(500).send(`Error deleting data with ID ${id}`);
    }
});



module.exports = router;