const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sudhanva_16:16Sudhu03@sudhu.m3jszym.mongodb.net/?retryWrites=true&w=majority',
{
    useUnifiedTopology: true,
    useNewUrlParser: true
}
)
.then((response) => {
    console.log("Connected to DataBase");
})
.catch((error) => {
    console.log(error);
});