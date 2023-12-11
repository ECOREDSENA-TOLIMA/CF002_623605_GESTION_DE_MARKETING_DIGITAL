<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo se enfoca en dos áreas clave: la analítica de la experiencia del cliente y el perfilamiento del comprador persona. En la primera parte, se aborda la importancia de comprender la experiencia del cliente, explorando conceptos como el mapa de experiencia, la comunicación estratégica y la interacción en el ecosistema digital. La segunda parte se centra en el perfilamiento del comprador persona, incluyendo tipos de perfiles, la creación de arquetipos, el diseño de informes específicos y la implementación de KPI con acciones de mejora. Este enfoque integral busca optimizar la comprensión del cliente y la toma de decisiones estratégicas basadas en datos.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
