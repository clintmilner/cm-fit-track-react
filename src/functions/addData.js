const {createClient} = require('@astrajs/collections')

const collection = 'dataset'

exports.handler = async function(event, context, callback){

    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    })

    const dataset = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection)

    console.log('dataset', dataset)

    try {
        await dataset.create('a dataset', {
            title: 'my first data'
        })
        return {
            statusCode: 200
        }
    } catch (e) {
        console.error(e)
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }


}
