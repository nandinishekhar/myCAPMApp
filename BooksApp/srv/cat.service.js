module.export = cds.service.impl(async function (){
    const {
        BookAuth, Author
    } = this.entries;

    this.before('CREATE', 'BookAuth', async (req)=>{
       //Promise 
        // let oPromise = new Promise( function(mySuccPromise){
        //     let bookid = cds.run(SELECT.from(BookAuth).where({BookAuth: req.data.ID}))//select query
        //     if(bookid){
        //         myBookPromise()
        //     }
        // })
        // myBookPromise.then(
        //     function(SuccessData){
        //     },
        //     function(error){
        //     }
        // )
       //End

       //await
       //let bookid = await cds.run(SELECT.from(BookAuth).where({BookAuth: req.data.ID}))

        if(req.BookAuth.ID === "101"){
            return req.console.error({code:"409", message:"Books are not available"});
        }
    })
})