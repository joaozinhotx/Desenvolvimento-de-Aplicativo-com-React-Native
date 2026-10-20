//=================
// A Moldura que envolve todas as telas do app
//=================

//Conceito: import
//"Import" traz para cá uma ferramenta que outra pessoa ja criou.

//Stack:"pilha de telas" que o usuário vai percorrer. A pilha é como uma lista de telas que o usuário visitou, e ele pode voltar para a tela anterior.

import { Stack } from "expo-router";
//StatusBar: barra de status do celular, que mostra a hora, a bateria, etc.
import { StatusBar } from "expo-status-bar";

//Conceito:
//No react native, cada pedaço de tela é um componente.
// Um componente é so uma Função que devolve (return) o que aparece.

// essa função default é a função principal deste arquivo. Ela é chamada de "default" porque é a função que será usada quando alguém importar este arquivo.
export default function Layout() {
  return (
    <>
    {/*StatusBar é a barra de status do celular, que mostra a hora, a bateria, etc.*/}
    <StatusBar style="light" />
    {/* Stack: a pilha de telas*/}
    <Stack screenOptions={{ headerShown: false }} />                                                             
    </>

    );
}   