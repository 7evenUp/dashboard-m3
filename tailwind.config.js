/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          "primary": "#0B61A4",
          "onPrimary": "#FFFFFF",
          "primaryContainer": "#D2E4FF",
          "onPrimaryContainer": "#001C37",
          "primaryFixed": "#D2E4FF",
          "onPrimaryFixed": "#001C37",
          "primaryFixedDim": "#A0C9FF",
          "onPrimaryFixedVariant": "#00497F",
          "secondary": "#535F70",
          "onSecondary": "#FFFFFF",
          "secondaryContainer": "#D7E3F8",
          "onSecondaryContainer": "#101C2B",
          "secondaryFixed": "#D7E3F8",
          "onSecondaryFixed": "#101C2B",
          "secondaryFixedDim": "#BBC7DB",
          "onSecondaryFixedVariant": "#3C4858",
          "tertiary": "#6B5778",
          "onTertiary": "#FFFFFF",
          "tertiaryContainer": "#F3DAFF",
          "onTertiaryContainer": "#251431",
          "tertiaryFixed": "#F3DAFF",
          "onTertiaryFixed": "#251431",
          "tertiaryFixedDim": "#D7BDE4",
          "onTertiaryFixedVariant": "#533F5F",
          "error": "#BA1A1A",
          "onError": "#FFFFFF",
          "errorContainer": "#FFDAD6",
          "onErrorContainer": "#410002",
          "outline": "#73777F",
          "background": "#FDFCFF",
          "onBackground": "#1A1C1E",
          "surface": "#FAF9FD",
          "onSurface": "#1A1C1E",
          "surfaceVariant": "#DFE2EB",
          "onSurfaceVariant": "#43474E",
          "inverseSurface": "#2F3033",
          "inverseOnSurface": "#F1F0F4",
          "inversePrimary": "#A0C9FF",
          "shadow": "#000000",
          "surfaceTint": "#0B61A4",
          "outlineVariant": "#C3C6CF",
          "scrim": "#000000",
          "surfaceContainerHighest": "#E3E2E6",
          "surfaceContainerHigh": "#E8E8EB",
          "surfaceContainer": "#EEEDF1",
          "surfaceContainerLow": "#F4F3F7",
          "surfaceContainerLowest": "#FFFFFF",
          "surfaceBright": "#FAF9FD",
          "surfaceDim": "#DAD9DD"
        },
        "dark": {
          "primary": "#A0C9FF",
          "onPrimary": "#00325A",
          "primaryContainer": "#00497F",
          "onPrimaryContainer": "#D2E4FF",
          "primaryFixed": "#D2E4FF",
          "onPrimaryFixed": "#001C37",
          "primaryFixedDim": "#A0C9FF",
          "onPrimaryFixedVariant": "#00497F",
          "secondary": "#BBC7DB",
          "onSecondary": "#253141",
          "secondaryContainer": "#3C4858",
          "onSecondaryContainer": "#D7E3F8",
          "secondaryFixed": "#D7E3F8",
          "onSecondaryFixed": "#101C2B",
          "secondaryFixedDim": "#BBC7DB",
          "onSecondaryFixedVariant": "#3C4858",
          "tertiary": "#D7BDE4",
          "onTertiary": "#3B2947",
          "tertiaryContainer": "#533F5F",
          "onTertiaryContainer": "#F3DAFF",
          "tertiaryFixed": "#F3DAFF",
          "onTertiaryFixed": "#251431",
          "tertiaryFixedDim": "#D7BDE4",
          "onTertiaryFixedVariant": "#533F5F",
          "error": "#FFB4AB",
          "onError": "#690005",
          "errorContainer": "#93000A",
          "onErrorContainer": "#FFDAD6",
          "outline": "#8D9199",
          "background": "#1A1C1E",
          "onBackground": "#E3E2E6",
          "surface": "#121316",
          "onSurface": "#C6C6CA",
          "surfaceVariant": "#43474E",
          "onSurfaceVariant": "#C3C6CF",
          "inverseSurface": "#E3E2E6",
          "inverseOnSurface": "#1A1C1E",
          "inversePrimary": "#0B61A4",
          "shadow": "#000000",
          "surfaceTint": "#A0C9FF",
          "outlineVariant": "#43474E",
          "scrim": "#000000",
          "surfaceContainerHighest": "#333538",
          "surfaceContainerHigh": "#292A2D",
          "surfaceContainer": "#1E2022",
          "surfaceContainerLow": "#1A1C1E",
          "surfaceContainerLowest": "#0D0E11",
          "surfaceBright": "#38393C",
          "surfaceDim": "#121316"
        }
      },
      boxShadow: {
        elevation1: '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        elevation2: '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        elevation3: '0 1px 3px 0 rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
        elevation4: '0 2px 3px 0 rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
        elevation5: '0 4px 4px 0 rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
