const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
       const alunos = listaDeAlunosEMedias[0];
       const media = listaDeAlunosEMedias[1];

       const indice = alunos.indexOf(aluno);

       const mediaDoaluno = medias[indice];


       console.log(`${aluno} tem a média ${mediaDoaluno}`);
    }else{
        console.log("Aluno não encontrado!");
    }
}  
exibeNomeENota("Caio");