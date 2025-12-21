class OldAPI{

    request(){
        return "Old API Data";
    }

}

class Adapter{

    constructor(oldApi){
        this.oldApi = oldApi;
    }

    fetch(){
        return this.oldApi.request();
    }

}

const api = new Adapter(new OldAPI());
console.log(api.fetch());