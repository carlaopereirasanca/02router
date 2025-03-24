
import styles from "./SobreMim.module.css";
import PostModelo from "@/componentes/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png";
import fotoSobreMim from "@/assets/sobre_mim_foto.jpeg";

export default function SobreMim() {

    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim" >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o famoso Asdrubal!
            </h3>

            <img src={fotoSobreMim}
                 alt="foto do asdrubal"
                 className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Asdrubal Topolinsk sempre foi fascinado por tecnologia. Desde criança, 
                ele passava horas na casa do tio, que possuía um computador NEZ8000, 
                um modelo raro que ele havia comprado após muito pesquisar. 
                Esse computador, com suas luzes piscantes e sons peculiares, 
                encantava Asdrubal, que logo começou a aprender os comandos básicos 
                e a explorar as capacidades da máquina. Foi nesse ambiente que nasceu 
                sua paixão por computação e programação.        
            </p>

            <p className={styles.paragrafo}>
                No ensino médio, Asdrubal decidiu seguir sua paixão e se matriculou no 
                curso técnico de Processamento de Dados, onde se destacou como um dos melhores alunos. 
                Ele era conhecido por sua curiosidade insaciável e pela habilidade de resolver problemas complexos. Após concluir o curso técnico, ele continuou seus estudos no curso de Tecnologia de Processamento de Dados, no Rio de Janeiro. 
                Lá, Asdrubal aprofundou seus conhecimentos em linguagens de programação, 
                bancos de dados e sistemas operacionais, sempre buscando aprender mais e mais.          
            </p>

            <p className={styles.paragrafo}>
                A trajetória de Asdrubal chamou a atenção de Carlão, um renomado professor 
                do Instituto Federal de São Paulo (IFSP), campus São Carlos. 
                Carlão, impressionado pela história de dedicação e paixão de Asdrubal, 
                começou a usar sua trajetória como exemplo em suas aulas. 
                Ele mostrava como alguém que começou explorando um computador antigo na casa 
                do tio podia se tornar um profissional respeitado e uma fonte de inspiração para novos programadores.              
            </p>

            <p className={styles.paragrafo}>
                Hoje, Asdrubal Topolinsk é lembrado como um ícone nas aulas de programação do Carlão, simbolizando o poder da curiosidade, da dedicação e da vontade de aprender. 
                Sua história motiva os alunos a explorarem, a não terem medo de errar 
                e a sempre buscarem entender a tecnologia a fundo, como ele fez desde seus primeiros passos no NEZ8000.                    
            </p>

        </PostModelo>
    )
}
