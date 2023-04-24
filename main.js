// MODO COMPLETO

const loadDataCep = () => {
    
    const cepValue = document.querySelector(".cep-input");
    
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `https://viacep.com.br/ws/${cepValue.value}/json/`)
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
                
            const res = JSON.parse(xhr.responseText)

            const cep = res.cep
            const log = res.logradouro
            const comp = res.complemento
            const bairro = res.bairro
            const loc = res.localidade
            const uf = res.uf
            const ddd = res.ddd 

            const cepView = document.querySelector(".cep-val")
            const logradouroView = document.querySelector(".logradouro-val")
            const complementoView = document.querySelector(".complemento-val")
            const bairroView = document.querySelector(".bairro-val")
            const localidadeView = document.querySelector(".localidade-val")
            const ufView = document.querySelector(".uf-val")
            const dddView = document.querySelector(".ddd-val")

            cepView.value = cep
            logradouroView.value = log
            complementoView.value = comp
            bairroView.value = bairro
            localidadeView.value = loc
            ufView.value = uf
            dddView.value = ddd

            cepView.setAttribute("readonly", true);
            logradouroView.setAttribute("readonly", true);
            complementoView.setAttribute("readonly", true);
            bairroView.setAttribute("readonly", true);
            localidadeView.setAttribute("readonly", true);
            ufView.setAttribute("readonly", true);
            dddView.setAttribute("readonly", true);
        }
    }
}

// // MODO REDUZIDO

// const loadDataCep = () => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", `https://viacep.com.br/ws/${document.querySelector(".cep-input").value}/json/`)
//     xhr.send(null)
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             document.querySelector(".cep-val").value = JSON.parse(xhr.responseText).cep
//             document.querySelector(".logradouro-val").value = JSON.parse(xhr.responseText).logradouro
//             document.querySelector(".complemento-val").value = JSON.parse(xhr.responseText).complemento
//             document.querySelector(".bairro-val").value = JSON.parse(xhr.responseText).bairro
//             document.querySelector(".localidade-val").value = JSON.parse(xhr.responseText).localidade
//             document.querySelector(".uf-val").value = JSON.parse(xhr.responseText).uf
//             document.querySelector(".ddd-val").value = JSON.parse(xhr.responseText).ddd 
//             document.querySelector("#ipt-disable").setAttribute("readonly", true);
//         }
//     }
// }