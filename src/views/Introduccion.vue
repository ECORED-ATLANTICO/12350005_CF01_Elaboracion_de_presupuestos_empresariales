<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bg-color-primario-p5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo “Fundamentos del presupuesto organizacional y su estructura técnica” ofrece al aprendiz herramientas conceptuales y técnicas para comprender la importancia del presupuesto como instrumento de planeación, control y toma de decisiones en las organizaciones. A partir del conocimiento de la definición, los tipos, los componentes y las etapas del presupuesto, se fortalecen las capacidades para estructurar proyecciones financieras coherentes, facilitando el análisis de recursos y la anticipación de necesidades en distintos contextos empresariales. De esta manera, el presupuesto se convierte en un medio estratégico para organizar y optimizar la gestión económica.
    
    //- Imagen con fondo y tarjeta
    .container.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10
          .cajon.color-terciario-t10.p-4.mb-4.mb-lg-0
            p.mb-0 Este componente también enfatiza en los principios y fundamentos de la contabilidad aplicada al presupuesto, con un enfoque en la clasificación de ingresos y egresos, y en la normativa que orienta la elaboración financiera. Además, promueve la interpretación de información contable como base para tomar decisiones responsables. Así, se contribuye a la formación de aprendices capaces de integrar la teoría y la práctica en la construcción de presupuestos ajustados a las necesidades organizacionales.

        .col-12.col-md-8.col-lg-2
          figure
            img.mb-4.mb-lg-0(data-aos="fade-left")(src='@/assets/curso/intro/img02.svg', alt='imagen decorativa')
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/qcWnSBal78Y?si=oGc1sp5bByaLlu8D" title="Fundamentos del presupuesto organizacional y su estructura técnica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
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
