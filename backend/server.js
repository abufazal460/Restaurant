import app from "./index.js"; // ye app kya hai ye index.js mai likha hua sara code hai

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`); // ye code run karne ke liye hai process.env ye syntax hai aur process.env.PORT ye port number hai ye ek variable hai ismai valye store hai
});
