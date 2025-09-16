<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presupuesto organizacional

    
    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 El presupuesto organizacional es un sistema formal de planificación y control que traduce la estrategia en términos financieros para un periodo determinado. Establece supuestos y metas cuantificables, define límites de gasto, asigna recursos por centros de responsabilidad, determina fuentes de financiación y criterios de priorización, y fija indicadores para evaluar el desempeño.
    .cajon.color-contenido.p-4.mb-5.mb-lg-0
            p.mb-0 A través de su ejecución y seguimiento, incluido el análisis de variaciones y la adopción de medidas correctivas, coordina áreas, optimiza el uso de los recursos y respalda la sostenibilidad y el desarrollo institucional.

    separador

    //- titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_1 1.1 Definición

    p.mb-5 El presupuesto se concibe como un instrumento de gestión que proyecta de manera anticipada las operaciones financieras de una organización durante un periodo determinado. Constituye una representación cuantificada de los planes institucionales y se utiliza como guía para la asignación eficiente de recursos, el control de gastos y la evaluación de resultados. Su propósito trasciende lo contable:

    //- col4 y col8
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img02.png', alt='imagen decorativa')
        .col-lg-8
          .tarjeta.bg-color-primario-p5.p-4.mb-4(data-aos="fade-left")
            .container
              .row.justify-content-center.align-items-center
                .col-8.col-md-6.col-lg-2.mx-auto
                  figure
                    img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema1/img03.svg', alt='imagen decorativa')
                .col-12.col-lg-10
                  p.mb-0 Articula los objetivos estratégicos con la operación diaria, facilita la coordinación entre áreas, delimita responsabilidades y promueve la disciplina financiera. De este modo, permite anticipar escenarios, reducir la incertidumbre y servir como referencia para la toma de decisiones fundamentadas.
          .tarjeta.bg-color-primario-p5.p-4(data-aos="fade-right")
            .container
              .row.justify-content-center.align-items-center
                .col-8.col-md-6.col-lg-2.mx-auto
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img04.svg', alt='imagen decorativa')
                .col-12.col-lg-10
                  p.mb-0 Cumple la función de control y retroalimentación, al comparar lo proyectado con lo ejecutado, detectar desviaciones y generar información para decisiones correctivas. Con ello orienta la gestión directiva, alinea esfuerzos hacia objetivos comunes y fortalece la sostenibilidad financiera en distintos horizontes de tiempo.

    p.mb-5 Los presupuestos pueden clasificarse según su alcance, finalidad y horizonte de aplicación. Entre los más utilizados se encuentran:

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
           TabsA.color-secundario.mb-4.mb-lg-0
            .tarjeta.p-4(titulo="Presupuesto de ventas.")
              h4 Presupuesto de ventas.
              p.mb-0 Establece los ingresos esperados con base en proyecciones de mercado, tendencias históricas y objetivos comerciales. Es el punto de partida del proceso presupuestal, ya que condiciona los demás cálculos.
            .tarjeta.p-4(titulo="Presupuesto operativo.")
              h4 Presupuesto operativo.
              p.mb-0 Concentra los recursos necesarios para el funcionamiento cotidiano, incluyendo costos de producción, gastos administrativos y de distribución. Garantiza la eficiencia en la ejecución de los planes anuales.
            .tarjeta.p-4(titulo="Presupuesto financiero.")
              h4 Presupuesto financiero.
              p.mb-0 Proyecta estados financieros futuros como flujo de caja, estado de resultados y balance general. Permite evaluar la liquidez, anticipar necesidades de financiamiento y valorar la rentabilidad esperada.
            .tarjeta.p-4(titulo="Presupuesto de inversión.")
              h4 Presupuesto de inversión.
              p.mb-0 Contempla desembolsos destinados a activos fijos, expansión de capacidad instalada o proyectos estratégicos. Se orienta al crecimiento a largo plazo e incluye el análisis de rentabilidad y riesgo.
            .tarjeta.p-4(titulo="Presupuesto flexible.")
              h4 Presupuesto flexible.
              p.mb-0 Ajusta los cálculos en función del nivel real de actividad, ofreciendo un marco dinámico para comparar escenarios y responder a variaciones en la operación.
            .tarjeta.p-4(titulo="Presupuesto base cero.")
              h4 Presupuesto base cero.
              p.mb-0 Parte desde cero en cada ciclo presupuestal, justificando cada gasto de manera independiente. Favorece la eficiencia y el enfoque en prioridades estratégicas.
        .col-12.col-lg-4(data-aos="fade-left")
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img05.png', alt='imagen decorativa')
        
      separador
    
    
    //- titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_1_2 1.2 Componentes y etapas
    
    p.mb-5 El presupuesto organizacional está conformado por elementos que permiten estructurar la información financiera de forma ordenada y coherente. Entre los principales componentes se destacan:
    
    .bg-full-width.bg01
      .container.mb-5
        .row
          .col-6.col-md-4.col-lg-3.mx-auto
            figure
              img.mb-4.mb-lg-0(data-aos="fade-right")(src='@/assets/curso/temas/tema1/img06.png', alt='imagen decorativa')
          .col-12.col-md-12.col-lg-9
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
              div(titulo="Ingresos previstos.")
                p.mb-0 Representan las entradas de dinero que se esperan obtener en un periodo, ya sea por ventas, prestación de servicios, inversiones u otras fuentes. Su correcta estimación garantiza la solvencia financiera y define la capacidad de gasto.
              div(titulo="Costos y gastos operativos.")
                p.mb-0 Incluyen los desembolsos necesarios para mantener el funcionamiento diario, como materias primas, mano de obra, servicios públicos, gastos administrativos y de comercialización. Permiten medir la eficiencia de la operación y controlar la rentabilidad.
              div(titulo="Inversiones de capital.")
                p.mb-0 Recursos destinados a la adquisición o modernización de activos fijos, la implementación de proyectos estratégicos o la expansión de la capacidad productiva. Requieren evaluar su viabilidad económica y financiera.
              div(titulo="Fuentes de financiamiento.")
                p.mb-0 Mecanismos internos y externos que respaldan los planes presupuestales, como reinversión de utilidades, créditos bancarios o emisión de títulos. Su adecuada selección asegura equilibrio entre liquidez, rentabilidad y riesgo.
              div(titulo="Resultados esperados.")
                p.mb-0 Beneficios proyectados en términos de utilidad neta, rentabilidad y sostenibilidad. Funcionan como referencia para valorar la efectividad de la planeación presupuestal.

    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p.mb-0 El proceso presupuestal constituye un ciclo dinámico que integra planeación, formulación, ejecución y control en una secuencia ordenada. Cada etapa aporta valor a la gestión financiera, asegurando que las decisiones estén fundamentadas en información precisa y orientadas al logro de objetivos estratégicos. Al desarrollarse de manera continua, el presupuesto no solo organiza cifras, sino que también impulsa la eficiencia operativa, fortalece la disciplina en el uso de los recursos y facilita la capacidad de anticiparse a riesgos y oportunidades. La claridad en estas fases permite a la organización mantener coherencia entre lo proyectado y lo ejecutado, generando una retroalimentación constante que impulsa la mejora continua y la sostenibilidad en el tiempo.
        .col-12.col-md-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img07.png', alt='imagen decorativa')


    .container(data-aos="fade-right")
      .row.align-items-center
        .col-12.col-md-12.col-lg-10.mx-auto
          PasosA.color-primario.mb-5(tipo="n")
            .row
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Planeación.
                p Define objetivos estratégicos y metas financieras. Incluye análisis del entorno, tendencias del mercado, recursos disponibles y riesgos potenciales, con el fin de establecer lineamientos claros.
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img08.svg', alt='Texto que describa la imagen')

            .row
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
              .col-md-8.text-left
                h3 Formulación.
                p Cuantificación de ingresos, egresos e inversiones, distribuidos por áreas o centros de responsabilidad. Utiliza proyecciones, series históricas y estudios de viabilidad para construir un presupuesto realista.
                
            .row
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Aprobación.
                p Revisión y validación del presupuesto por parte de la alta dirección. Formaliza la autorización de recursos, asigna responsabilidades y delimita compromisos institucionales.
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')

            .row
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.text-left
                h3 Ejecución.
                p Implementación de los planes financieros en la operación. Exige disciplina en el gasto, cumplimiento de metas y uso racional de los recursos, alineados con los objetivos estratégicos.
            
            .row
              .col-md-8.mb-4.mb-md-0.order-2.order-lg-1
                h3 Control y seguimiento.
                p Monitoreo periódico de los resultados frente a las proyecciones. El análisis de desviaciones permite identificar brechas, comprender sus causas y tomar medidas correctivas oportunas.
              .col-md-4.mb-4.mb-md-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
             
            .row
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0.text-left
                h3 Evaluación y retroalimentación.
                p Genera aprendizajes para los siguientes ciclos presupuestales. Garantiza la mejora continua, fortalece la capacidad de respuesta y refuerza la sostenibilidad financiera de la organización.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
