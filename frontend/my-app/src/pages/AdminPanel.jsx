import React, { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminPanel({ productList, setProductList }) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        colors: "",
        picture: "",
        description: "",
        rating: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.price && newProduct.picture) {
            const product = {
                id: productList.length + 1,
                ...newProduct,
                price: parseFloat(newProduct.price),
                colors: newProduct.colors.split(",").map((color) => color.trim()),
                rating: parseFloat(newProduct.rating),
            };
            setProductList((prev) => [...prev, product]);
            setNewProduct({
                name: "",
                price: "",
                colors: "",
                picture: "",
                description: "",
                rating: "",
            });
        }
    };

    const handleRemoveProduct = (id) => {
        setProductList((prev) => prev.filter((product) => product.id !== id));
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Admin Panel
            </Typography>

            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h6">Add New Product</Typography>
                <TextField
                    fullWidth
                    label="Product Name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Colors (comma-separated)"
                    name="colors"
                    value={newProduct.colors}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Image URL"
                    name="picture"
                    value={newProduct.picture}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" onClick={handleAddProduct}>
                    Add Product
                </Button>
            </Box>

            <Typography variant="h6">Product List</Typography>
            <List>
                {productList.map((product) => (
                    <ListItem
                        key={product.id}
                        secondaryAction={
                            <IconButton edge="end" onClick={() => handleRemoveProduct(product.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={product.name}
                            secondary={`$${product.price} | Colors: ${product.colors.join(", ")}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default AdminPanel;
