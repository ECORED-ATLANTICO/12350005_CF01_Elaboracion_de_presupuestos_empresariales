<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ingresos y egresos
    
    
    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 La proyección y control de ingresos y egresos es un eje fundamental dentro de la formulación presupuestal, ya que determina la capacidad de la organización para generar recursos, cumplir obligaciones y sostener su operación. Estos dos conceptos representan los flujos principales que alimentan la gestión financiera: los ingresos reflejan las entradas de dinero derivadas de las actividades económicas, mientras que los egresos corresponden a los desembolsos asociados al funcionamiento, inversión y crecimiento institucional.

    .row.mb-3.align-items-center.justify-content-center
      .col-12.col-lg-7
        .cajon.color-contenido.p-4.mb-5.mb-lg-0
          p.mb-0 Un adecuado análisis de estas partidas permite a la organización anticipar su liquidez, estimar su rentabilidad y garantizar el equilibrio financiero. Además, constituyen la base para evaluar la viabilidad de proyectos, medir la eficiencia operativa y tomar decisiones estratégicas sobre financiamiento, expansión o control de costos.
      .col-12.col-lg-5
        figure 
           img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')
    
    separador

    //- titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_3_1 3.1 Definición

    .row.mb-3.align-items-center.justify-content-center.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0
        figure 
           img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')
      .col-12.col-lg-7
          p.mb-0 Los ingresos y egresos representan los flujos financieros vitales de cualquier organización. Comprender su naturaleza, clasificación y comportamiento es fundamental para estructurar un presupuesto que refleje de manera fiel la realidad económica de la empresa y permita una gestión financiera eficaz. Se presentan los conceptos clave y la clasificación detallada que facilite su identificación, proyección y control dentro del proceso presupuestal.
     
    .bg-full-width.bg01
      .container
        .row.justify-content-center.align-items-center.mb-5.align-items-stretch
          .col-lg-6.col-12.col-md-12.my-2.d-flex(data-aos="fade-right")
            .position-relative.overflow-hidden.tarjeta.h-100.w-100
              .w-100.d-flex.align-items-center.justify-content-center.bg-color-primario-p5(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img04.png')})`}"
                style="height:210px; background-size:cover; background-position:center;"
              )
              img.position-absolute.start-50.translate-middle-x(style="width:120px; margin-top:-60px;" src="@/assets/curso/temas/tema3/img06.svg" alt="Icono")
            
              .p-4.pt-5.text-center.bg-color-primario-p5.h-100.w-100
                h3.pt-4 Ingresos
                p Son todos los recursos económicos que recibe una organización, provenientes de sus actividades principales (como ventas de productos o servicios) o fuentes secundarias (como inversiones o alquileres). Representan las entradas de dinero que incrementan el patrimonio y financian la operación. Su correcta proyección es vital para asegurar la sostenibilidad y el crecimiento planificado de la empresa.
          .col-lg-6.col-12.col-md-12.my-2.d-flex(data-aos="fade-left")
            .position-relative.overflow-hidden.tarjeta.h-100.w-100
              .w-100.d-flex.align-items-center.justify-content-center.bg-color-primario-p5(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img05.png')})`}"
                style="height:210px; background-size:cover; background-position:center;"
              )
              img.position-absolute.start-50.translate-middle-x(style="width:120px; margin-top:-60px;" src="@/assets/curso/temas/tema3/img07.svg" alt="Icono")
            
              .p-4.pt-5.text-center.bg-color-primario-p5.h-100.w-100
                h3.pt-4 Egresos
                p Son los desembolsos necesarios para el funcionamiento de la organización, incluyendo costos de producción, gastos administrativos, financieros y de inversión. Estas salidas de recursos permiten mantener la operación, cumplir obligaciones y apoyar el desarrollo, pero deben gestionarse eficientemente para no comprometer la liquidez ni la rentabilidad.

      .row.mb-3.align-items-center.justify-content-center
        .col-12.col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen decorativa')
        .col-12.col-lg-9
            p.mb-0 El equilibrio entre ingresos y egresos define la solvencia y sostenibilidad financiera de la organización. Cuando los ingresos superan los egresos, se genera un superávit, que puede reinvertirse o destinarse a reservas. Por el contrario, cuando los egresos superan los ingresos, se produce un déficit, que puede obligar a la empresa a recurrir a financiamiento externo o a ajustar sus operaciones. Por lo tanto, el presupuesto debe proyectar ambos flujos de manera realista y coordinada, asegurando que los recursos disponibles se asignen de forma eficiente y alineada con los objetivos estratégicos.
        

    separador

    //- titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_3_2 3.2 Clases

    .bloque-texto-g.bg-color-primario-p5.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La clasificación de los ingresos y egresos constituye un pilar fundamental en la estructuración técnica del presupuesto, ya que permite organizar, analizar y controlar de manera sistemática los flujos económicos de la organización. Al categorizar estos conceptos según su origen, naturaleza y comportamiento, se facilita la identificación de patrones, la toma de decisiones informadas y la optimización de los recursos financieros. Esta segmentación no solo aporta claridad contable, sino que también fortalece la capacidad de proyectar escenarios realistas y alinear la gestión presupuestal con los objetivos estratégicos de la empresa.


    .row.mb-5.align-items-center.justify-content-center(data-aos="fade-right")
      .col-12.col-lg-8.mb-4.mb-lg-0
          p La clasificación de ingresos constituye un procedimiento analítico esencial para categorizar los recursos económicos según su naturaleza, origen y periodicidad. Al separar los ingresos en operacionales (los del negocio principal) y no operacionales (los de actividades secundarias), se puede ver claramente qué tan estable y sostenible es la empresa.
          p.mb-0 A continuación se muestra cada tipo para identificarlos:
      .col-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
    
    .container.mb-5
        .row
          .col-8.col-lg-3.mx-auto(data-aos="fade-left").d-none.d-lg-block
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img11.png', alt='imagen decorativa')
          .col-12.col-lg-9(data-aos="fade-right")
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              div(titulo="Ingresos operacionales")
                p.mb-0 Provenientes de la actividad principal del negocio. Ejemplo: venta de productos, prestación de servicios, honorarios, matrículas y pensiones.
              div(titulo="Ingresos no operacionales")
                p.mb-0 Derivados de actividades secundarias o esporádicas. Ejemplo: intereses, dividendos, venta de activos, donaciones.
             
    .row.mb-5.align-items-center.justify-content-center
      .col-12.col-lg-8
          p La clasificación de egresos representa un proceso analítico fundamental para categorizar las salidas de recursos según su naturaleza, destino y comportamiento financiero. Esta diferenciación técnica permite distinguir entre los desembolsos inherentes a la operación central del negocio, que determinan su eficiencia operativa y aquellos asociados a actividades complementarias o esporádicas. Dicha segmentación resulta crucial para evaluar la estructura de costos, optimizar la asignación de recursos y fortalecer la gestión presupuestal. A continuación, se presentan estas categorías:
            .col-lg-12.position-relative
              .crd.crd--avatarHorizontal.py-3.py-lg-0.style2
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')
                  .col
                    p.mb-0 
                      b Por naturaleza: 
                      | esta clasificación agrupa los egresos según su destino dentro del negocio, diferenciando entre lo que se invierte directamente en la producción y lo que se destina al funcionamiento general de la organización.

      .col-12.col-md-8.col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')


    .container.mb-5
        .row
          .col-12.col-md-8.col-lg-3.mx-auto(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img14.png', alt='imagen decorativa')
          .col-12.col-lg-9(data-aos="fade-right")
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              div(titulo="Costos")
                p.mb-0 Gastos directamente relacionados con la producción. Ejemplos: materia prima, mano de obra directa.
              div(titulo="Gastos")
                p.mb-0 Gastos necesarios para operar el negocio, pero no participan en la producción directa. Ejemplos: salarios administrativos, publicidad, servicios públicos.
           

    .row.mb-5.align-items-center.justify-content-center
      .col-12.col-lg-8(data-aos="fade-right")
            .col-lg-12.position-relative.mb-4
              .crd.crd--avatarHorizontal.py-3.py-lg-0.style2
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen decorativa')
                  .col
                    p.mb-0 
                      b Por comportamiento: 
                      | esta clasificación organiza los egresos según cómo varían con el nivel de actividad de la empresa, permitiendo identificar qué gastos permanecen constantes y cuáles cambian según la producción o ventas.
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
                div(titulo="Fijos")
                  p.mb-0 Egresos que no cambian con la actividad de la empresa. Ejemplos: arriendo, seguros, depreciación.
                div(titulo="Variables")
                  p.mb-0 Egresos que cambian directamente con el nivel de actividad. Ejemplos: materias primas, comisiones por ventas.
                div(titulo="Semivariables / Mixtos")
                  p.mb-0 Egresos que combinan una parte fija y otra variable según la actividad. Ejemplos: teléfono con tarifa base + consumo adicional.
      .col-12.col-md-8.col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')

    .cajon.color-contenido.p-4.mb-5.mb-lg-0
      p.mb-0 Comprender la clasificación de los ingresos y egresos es fundamental para la gestión financiera de cualquier organización. Permite identificar las fuentes principales de recursos y los gastos asociados a la operación y producción, facilitando la toma de decisiones estratégicas, el control del flujo de efectivo y la planificación económica. Con esta visión clara, la empresa puede optimizar sus recursos, maximizar la rentabilidad y mantener un equilibrio sostenible entre ingresos y egresos.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
