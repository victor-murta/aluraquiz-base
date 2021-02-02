import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage(props){
    return (
        <ThemeProvider theme={dbExternal.theme}>
            <QuizScreen >
                externalQuestions={dbExterno.questions}
                externalBg={dbExerno.bg}
            </QuizScreen>
        </ThemeProvider>
    );
    
}
export async function getServerSideProps(context){
    const [projectName, githubUser] = context.query.id.split('___');

    try{
        const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app`)
            .then((respostaDoServer) => {
                if (respostaDoServer.ok){
                    return respostaDoServer.json();
                }
                throw new Error('Falha em pegar os dados');
            })
            .then((respostaConvertidaEObjeto) => {
                return respostaConvertidaEObjeto;
            })
            // .catch((err) => {
            //     console.log(err);
            // });

            console.log('', dbExterno);

        return {
            //will be passed to the page component as props
            props: {
                dbExterno, 
            }, 
        };
    } catch(err) {
        throw new Error(err);
      }
    }


