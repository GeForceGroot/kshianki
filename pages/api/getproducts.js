// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    let products = await Product.find()

    let singleBedSheets = {}

    for (let item of products) {

        if (item.title in singleBedSheets) {

            if (!singleBedSheets[item.title].color.includes(item.color) && item.availableQty > 0) {
                singleBedSheets[item.title].color.push(item.color)
            }

        }
        else {
            singleBedSheets[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty > 0) {
                singleBedSheets[item.title].color = [item.color]
            }
        }

    }


    res.status(200).json({ singleBedSheets })
}

export default connectDb(handler);
