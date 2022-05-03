module.exports = {
  content: ["./public/*/*.{html,js,css}"],
  content: ["./views/*.ejs"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        Water_Brush: ["WaterBrush"],
        Staatliches: ["Staatliches"],
        Yesteryear: ["Yesteryear"]
      }
    },
  },
  plugins: [],
}