# JEETK design-system foundations

This package collects shared design foundations for JEETK Flutter screens. Values marked **Figma** were sampled from the customer, sign-in, and order screens in the supplied JEETK file. Values marked **system extension** establish reusable defaults where the mobile screens did not specify a token.

## Colors

Use semantic roles from `JeetkPalette.of(context)` for UI that must adapt to light, dark, or high-contrast themes. `JeetkColors` exposes the original brand and neutral primitives for illustrations and fixed brand artwork.

| Role | Light / Figma value |
| --- | --- |
| Primary amber | `#F9AE42` |
| Primary tint | `#FFE7CC` |
| App canvas | `#F8FAFC` |
| Surface | `#FFFFFF` |
| Subtle surface | `#F6F6F6` |
| Primary text | `#1C2229` |
| Secondary text | `#464646` |
| Border | `#DEDEDE` |
| Divider | `#EBE5DD` |
| Success primitive | `#1EB37C` |
| Error primitive | `#FF6347` |

Semantic success, error, warning, and informational colors are adjusted per theme for readability. The raw Figma muted gray `JeetkColors.textMuted` remains available; theme-driven body text uses a darker semantic muted color. Pair status color with a text label or icon; do not rely on color alone.

## Typography

The screens use **Tajawal** (Regular, Medium, Bold). `JeetkTypography.textTheme` maps Flutter Material roles to the observed 10, 12, 14, 16, 18, 22, and 28 px steps. Body and heading line heights are included in the styles. The host app must register licensed Tajawal font files in its own `pubspec.yaml`; this package does not redistribute fonts.

Keep text scaling enabled so operating-system accessibility settings can enlarge the UI. The example app intentionally uses Arabic and right-to-left layout.

## Spacing and grid

Spacing follows a 4 px base with a 2 px micro step. The named constants are in `JeetkSpacing`.

`JeetkGrid` uses 4 columns with 16 px margins and 12 px gutters below 600 px (matching the 375 px Figma frame), 8 columns with 24/16 px from 600–839 px, 8 columns with 32/24 px from 840–1199 px, and 12 columns with 32/24 px at 1200 px and wider. Values beyond the compact breakpoint are responsive system extensions. `JeetkPageGutter` applies responsive page margins and a 1200 px content cap.

## Borders, corners, and shadows

Cards and controls use the observed 12 px radius; larger containers use 20 or 32 px, and status chips use a pill radius. Borders are 1 px by default, 0.5 px for subtle dividers, 1.5 px for emphasis, and 2 px for keyboard focus. `JeetkBorders` creates theme-aware sides.

The Figma cards are mostly flat, with outlines rather than elevation. `JeetkShadows` provides optional subtle, raised, and overlay recipes for menus and floating surfaces; prefer no shadow for standard cards.

## Icons

`JeetkIcons` centralizes common actions and sizes: 16, 20, 24, and 32 px. The Figma uses outlined Lucide/Vuesax assets; this package provides Flutter Material outlined equivalents as convenient defaults. Replace an equivalent only when a screen requires the exact supplied asset. Provide a tooltip or semantic label for icon-only actions. Use direction-aware navigation icons in RTL layouts.

## Motion

`JeetkMotion` defines 120, 200, 320, and 500 ms durations and standard enter, exit, and shared curves. Use `JeetkMotion.duration(context, duration)` for animations so the duration becomes zero when the platform requests reduced animation. The durations and curves are system extensions; the static Figma frames do not specify motion.

## Themes

- `JeetkTheme.light` — Figma-derived light palette.
- `JeetkTheme.dark` — dark semantic palette using the same brand amber.
- `JeetkTheme.lightHighContrast` and `JeetkTheme.darkHighContrast` — stronger text, borders, and focus colors.

Connect all four to `MaterialApp`'s `theme`, `darkTheme`, `highContrastTheme`, and `highContrastDarkTheme`, then use `ThemeMode.system` to follow device appearance. Components resolve colors from `JeetkPalette` and the active `ColorScheme`; avoid hard-coding light palette values in reusable widgets.

## Accessibility

`JeetkAccessibility.minimumTouchTarget` is 48 logical pixels and is used by `JeetkButton`; the theme uses padded Material tap targets. `JeetkAccessibility` also exposes helpers for high contrast, reduced motion, and focus outlines. Keep controls keyboard-focusable, give icon-only actions labels, preserve text scaling, and provide labels for state changes.

For text, target at least 4.5:1 contrast for normal text and 3:1 for large text, following WCAG 2.2 contrast guidance. Check actual foreground/background pairs in the app, especially brand fills, translucent status tints, images, and custom overlays. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

## Usage

```dart
MaterialApp(
  theme: JeetkTheme.light,
  darkTheme: JeetkTheme.dark,
  highContrastTheme: JeetkTheme.lightHighContrast,
  highContrastDarkTheme: JeetkTheme.darkHighContrast,
  themeMode: ThemeMode.system,
  home: const MyScreen(),
)
```

