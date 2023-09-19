module.exports = {
  name: 'outlineTitlePlugin',
  enhanceApp({ app }) {
    app.mixin({
      computed: {
        outlineTitle() {
          const url = window.location.pathname;
          const segments = url.split('/').filter((segment) => segment !== '');
          const lastSegment = segments[segments.length - 1];
          const decodedTitle = decodeURIComponent(lastSegment);
          const titleWithoutNumber = decodedTitle.replace(/^\d+-/, '');
          return titleWithoutNumber;
        }
      }
    });
  }
};
