module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: "#8257E5",
                brand_hover: "#996DFF",
                surface_prim: "#18181B",
                surface_seco: "#27272A",
                surface_seco_hover: "#3F3F46",
                stroke: "#52525B",
                txt_prim: "#F4F4F5",
                txt_seco: "#A1A1AA",
                txt_tool: "#27272A",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}
