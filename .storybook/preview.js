import "../dist/styles/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    darkClass: "dark-theme",
    lightClass: "light-theme",
    stylePreview: true,
  }
}
