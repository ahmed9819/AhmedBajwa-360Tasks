// Common JS
const fastify = require('fastify')({
    logger: true
})

//Declare a route
fastify.get('/',
        function(request, reply){       //CallBack function hai jo route call honay pr run krta hai
        reply.send(
            { hello: 'world' }
        )
    }
)

//fastify.listen() ka kaam server ko start karna hai
//ismay callback function pass kiya hai k jab server run hoga to wo function call hojayega

fastify.listen(
    { port: 3000},
    function(err, address){
        if (err){
        fastify.log.error(err)
        process.exit(1)
        }
        else{
            console.log("Server is running");
        }

    })

