<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contabilidad aplicada al presupuesto


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3.curvas
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-gray-gradient
            .px-4
              p.mb-0 La contabilidad aplicada al presupuesto constituye la base técnica que permite registrar, organizar y analizar la información financiera de la organización. A través de sus principios, normas y cuentas, proporciona el marco estructural para cuantificar ingresos, egresos, activos y pasivos, asegurando la coherencia entre los registros contables y las proyecciones presupuestales. 

    .cajon.color-contenido.p-4.mb-5.mb-lg-0
            p.mb-0 Este vínculo garantiza que los presupuestos se formulen sobre datos verificables y confiables, facilitando el control de recursos, la rendición de cuentas y la toma de decisiones fundamentadas. De esta manera, la contabilidad no solo respalda la precisión del presupuesto, sino que también lo convierte en un instrumento alineado con la normativa vigente y con la realidad económica de la entidad.

    separador

    //- titulo
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2#t_2_1 2.1 Conceptos y cuentas

    .container
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-12.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img02.png', alt='imagen decorativa')
        .col-lg-9
          p.mb-0 La contabilidad aplicada al presupuesto parte de conceptos básicos que permiten registrar y clasificar las operaciones financieras de la organización. En este contexto, la contabilidad se define como un sistema estructurado de información que identifica, mide y comunica los hechos económicos que afectan a una entidad, asegurando la transparencia y coherencia en el manejo de los recursos.
          
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.position-relative
        .crd.crd--avatarHorizontal.py-3.py-lg-0
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
            .col
              p.mb-0 El concepto de cuenta contable es central en este proceso. Cada cuenta representa una categoría específica de recursos, obligaciones o resultados, y su adecuada clasificación garantiza que los presupuestos reflejen fielmente la realidad económica. Estas cuentas se agrupan en un plan contable que sirve de guía para el registro de transacciones y para la preparación de informes financieros que alimentan la planeación presupuestal. En términos generales, las cuentas contables se dividen en:


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img04.png', alt='imagen decorativa')
        .col-lg-8
          .tarjeta.p-3.bg02.p-lg-5.p-md-4
            .tarjeta.bg-white.p-2
              SlyderA(tipo="b").tarjeta--blanca.p-3.rounded
                .tarjeta
                  .row.justify-content-center.align-items-center.p-1
                    .col-md-12.col-xl-10.mb-3
                      p.mb-0 Las cuentas de balance que relacionan la estructura financiera de la organización en un momento específico. Incluyen los activos, pasivos y patrimonio, y permiten identificar los recursos disponibles, las obligaciones adquiridas y la participación de los propietarios. Esta información es clave para determinar la capacidad de inversión y el nivel de endeudamiento al momento de formular el presupuesto.
                    .col-8.col-md-8.col-xl-2.mb-3 
                      figure
                        img(src='@/assets/curso/temas/tema2/img05.svg', alt='Imagen Decorativa').mx-auto
                .tarjeta
                  .row.justify-content-center.align-items-center.p-1
                    .col-md-12.col-xl-10.mb-3
                      p.mb-0 Las cuentas de resultado que reflejan la dinámica económica de la entidad durante un periodo. Están conformadas por ingresos, costos y gastos, y permiten medir la rentabilidad y eficiencia operativa. Al integrarse en el proceso presupuestal, estas cuentas facilitan la estimación de utilidades proyectadas y sirven como referencia para evaluar el desempeño frente a los objetivos financieros.
                    .col-8.col-md-8.col-xl-2.mb-3 
                      figure
                        img(src='@/assets/curso/temas/tema2/img06.svg', alt='Imagen Decorativa').mx-auto

      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
        .col-12.col-md-8.mb-3.mb-lg-0
          p.mb-0 Las cuentas contables se agrupan en categorías que permiten organizar la información financiera de la organización. Cada grupo cumple un propósito específico: algunos reflejan la estructura patrimonial, mientras que otros muestran el desempeño económico en un periodo. Esta clasificación es la base para elaborar presupuestos confiables y alineados con la realidad financiera:            
        .col-12.col-md-4
          figure
            img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa').mx-auto
            
      TabsB.color-gris.mb-3(data-aos="fade-right")
        .py-4.py-md-5(titulo="Activos" :icono="require('@/assets/curso/temas/tema2/img08.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Activos
              p Bienes y derechos de la organización con capacidad de generar beneficios económicos futuros. Ejemplos: caja, bancos, cuentas por cobrar, inventarios, propiedades, maquinaria.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img14.png', alt='Texto que describa la imagen')
              
        .py-4.py-md-5(titulo="Pasivos" :icono="require('@/assets/curso/temas/tema2/img09.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Pasivos
              p Obligaciones frente a terceros que representan deudas o compromisos financieros. Ejemplos: préstamos bancarios, cuentas por pagar, impuestos por pagar.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img15.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Patrimonio" :icono="require('@/assets/curso/temas/tema2/img10.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Patrimonio
              p Recursos propios de los socios o propietarios, junto con los resultados acumulados. Ejemplos: capital social, reservas, utilidades retenidas.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img16.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Ingresos" :icono="require('@/assets/curso/temas/tema2/img11.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Ingresos
              p Entradas de dinero por ventas, servicios u otras actividades ordinarias. Ejemplos: ventas, prestación de servicios, rendimientos financieros.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img17.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Gastos" :icono="require('@/assets/curso/temas/tema2/img12.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Gastos
              p Desembolsos que disminuyen la utilidad y se asocian a la operación. Ejemplos: sueldos, arrendamientos, suministros, publicidad.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img18.png', alt='Texto que describa la imagen')
        
        .py-4.py-md-5(titulo="Costos" :icono="require('@/assets/curso/temas/tema2/img13.svg')")
          .row.py-3.px-4.px-md-5.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Costos
              p Valores ligados directamente a la producción de bienes o servicios. Ejemplos: materias primas, mano de obra directa, costos de producción.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img19.png', alt='Texto que describa la imagen')

      separador

      //- titulo
      .titulo-segundo.color-secundario(data-aos="fade-right")
        h2#t_2_2 2.2 Principios y normativa

      .container
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-3
            figure
              img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img31.png', alt='imagen decorativa')
          .col-12.col-lg-9
            p La contabilidad aplicada al presupuesto se rige por principios y normas que garantizan la confiabilidad, uniformidad y transparencia de la información financiera. Estos lineamientos constituyen la base para que los estados contables y los presupuestos reflejen de manera fiel la situación económica de la organización y sirvan como soporte en la toma de decisiones.
            p.mb-0 Los principios contables son pautas que orientan el registro y presentación de la información financiera. En Colombia, estos principios han sido armonizados con las Normas Internacionales de Información Financiera (NIIF), asegurando compatibilidad con estándares globales. Entre los más relevantes se destacan:
          
      .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-lg-8.order-2.order-lg-1
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img20.svg' alt='AvatarTop')
                h5.text-center Equidad
                p.text-center Los registros deben ser justos para todas las partes interesadas, sin favorecer a ninguna de ellas.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img21.svg' alt='AvatarTop')
                h5.text-center Ente económico
                p.text-center La contabilidad corresponde a la organización como entidad independiente, separada de sus propietarios.
              
              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img22.svg' alt='AvatarTop')
                h5.text-center Periodo contable
                p.text-center Las operaciones se deben registrar en periodos definidos (mensual, trimestral o anual) para evaluar resultados.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img23.svg' alt='AvatarTop')
                h5.text-center Devengo
                p.text-center Los hechos económicos se reconocen en el momento en que ocurren, independientemente del flujo de efectivo.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img24.svg' alt='AvatarTop')
                h5.text-center Uniformidad
                p.text-center Los métodos de registro deben mantenerse constantes en el tiempo, permitiendo comparaciones entre periodos.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img25.svg' alt='AvatarTop')
                h5.text-center Prudencia
                p.text-center Ante la incertidumbre, los ingresos se reconocen solo cuando son ciertos, y los gastos se registran aun si son probables.

              .tarjeta.color-gris.p-4
                .row.justify-content-center.mb-3
                  .col-6.col-lg-8
                    img(src='@/assets/curso/temas/tema2/img26.svg' alt='AvatarTop')
                h5.text-center Esencia sobre forma
                p.text-center La contabilidad debe reflejar la realidad económica de las transacciones más allá de su aspecto legal.

          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-md-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img32.png', alt='imagen decorativa')
          
    p.mb-5 En Colombia, la normativa que regula la preparación de información contable y presupuestal está principalmente vinculada al marco normativo de las NIIF, adoptado mediante la Ley 1314 de 2009 y reglamentado por el Decreto Único Reglamentario 2420 de 2015 y sus actualizaciones. Este marco clasifica a las entidades en tres grupos:

    .row.mb-5
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img27.png' alt='AvatarTop').w-auto
          h5.text-center Grupo 1
          p.text-center Entidades de interés público o con alta responsabilidad económica, aplican las 
            b NIIF plenas.
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0.d-flex
        .tarjeta.color-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img28.png' alt='AvatarTop').w-auto
          h5.text-center Grupo 2
          p.text-center Pequeñas y medianas empresas (PYMES), aplican la 
            b NIIF para PYMES.
      .col-12.col-md-6.offset-md-3.col-lg-4.offset-lg-0.mb-3.mb-lg-0.d-flex
        .tarjeta.color-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img29.png' alt='AvatarTop').w-auto
          h5.text-center Grupo 3
          p.text-center Microempresas, aplican un régimen simplificado adaptado a su tamaño y complejidad.
    
    
    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-5
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/temas/tema2/img30.png', alt='imagen decorativa')
        .col-lg-7
          .cajon.bg-color-primario-p5.p-lg-5.p-4
            p.mb-0 El cumplimiento de esta normativa asegura que la información financiera que alimenta el presupuesto sea confiable, comparable y transparente, lo cual fortalece la gestión interna y la credibilidad externa frente a inversionistas, entidades de control y demás grupos de interés.
          

</template>

<script>
export default {
  name: 'Tema2',
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
