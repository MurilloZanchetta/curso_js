function hora (data){
    if(data && !(data instanceof Date)){
throw('TypeError: Esperando instância de Date');

    }
    if (!data){
        data = new Date(); // Pega a data atual caso não seja passada nenhuma
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false})

};


try{
    const horas = hora(11)
    console.log(horas)
    hora(new Date)

}catch(err){
    console.log (err)
}finally{
    console.log("Corrija o error")
}