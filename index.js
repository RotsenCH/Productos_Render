const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/',(req,res)=>{
    res.send("Landing page - Grupo 5")
})

app.get('/integrantes',(req,res)=>{
    res.json([
        {
            "nombre":"Néstor",
            "apellido":"Chumania",
            "edad":20
        },
        {
            "nombre":"Danny",
            "apellido":"Vinueza",
            "edad":21
        },
        {
            "nombre":"Daniel",
            "apellido":"Quishpe",
            "edad":21
        },
        {
            "nombre":"Carolina",
            "apellido":"Alvarado",
            "edad":20
        }
    ])
})

app.get('/products',(req,res)=>{
    res.send(`
            <h1>Catálogo de productos</h1>
                <p>Bienvenidos</p>
    `)
})



app.listen(PORT, () => {
    console.log(`Servidor en el puerto: ${PORT}`);
});
