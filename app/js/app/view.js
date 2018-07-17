define(function() {
    return {
        seen: (where, who)=> {
            where.insertAdjacentHTML('afterend', who);
        },
        logger: (msg)=> {
            console.log(msg);
        }
    };
});
