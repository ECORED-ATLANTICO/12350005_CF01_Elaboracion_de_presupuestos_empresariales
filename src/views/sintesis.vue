<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-center.mb-5
      .col-12.col-lg-8
        p El componente formativo “Fundamentos del presupuesto organizacional y su estructura técnica” permite comprender los principios y herramientas necesarios para la formulación, análisis y gestión del presupuesto en una organización, desde su fundamentación conceptual y contable hasta su aplicación práctica en la planificación financiera y toma de decisiones.
        p Se inicia con el estudio de presupuesto organizacional, abordando su definición, tipos, componentes y etapas, así como su relación con la gestión estratégica de recursos. Posteriormente, se profundiza en contabilidad aplicada al presupuesto, lo que permite establecer su importancia en la estructuración de información financiera confiable y su alineación con la normativa contable y legal.
        p Asimismo, se analizan ingresos y egresos, proporcionando herramientas para clasificar, proyectar y controlar los recursos financieros de la organización. Se presentan distintos tipos de presupuestos que influyen en la planificación y asignación de recursos, así como las técnicas de construcción de proyecciones financieras, análisis de flujo de caja, costos e inversiones, garantizando un enfoque integral entre lo operativo y lo financiero.
      .col-8.col-lg-4.mx-auto
         figure
          img(src="@/assets/curso/sintesis01.png", alt="Imagen decorativa ")
    .row.justify-content-center
      .col-12.col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Fundamentos del presupuesto organizacional y su estructura técnica” ofrece una aproximación integral a los conocimientos fundamentales sobre la planificación financiera y la gestión de recursos en las organizaciones. Este módulo analiza detalladamente los tipos de presupuestos, sus componentes y etapas, resaltando su relevancia en la organización y asignación eficiente de los recursos, y se desglosan los principios contables, normatividad y cuentas aplicables para la correcta formulación presupuestal. Asimismo, se estudian los ingresos y egresos, su clasificación y proyección, proporcionando herramientas para el control y seguimiento financiero de la empresa. La propuesta profundiza en la construcción de proyecciones financieras y el análisis de variables como costos, inversiones y flujo de caja, así como en la integración de la información contable con la estructura presupuestal para la toma de decisiones estratégicas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
