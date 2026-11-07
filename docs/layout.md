# Layout primitives

Layout widgets use JEETK spacing, grid, border, and semantic palette tokens. `JeetkRow` and `JeetkColumn` add consistent gaps; set `JeetkRow.wrap` for responsive wrapping. `JeetkLayoutGrid` computes columns from minimum item width and available constraints.

- **Surface and flow:** `JeetkContainer`, `JeetkRow`, `JeetkColumn`, `JeetkLayoutGrid`
- **Small primitives:** `JeetkDivider`, `JeetkSpacer`, `JeetkStack`
- **Responsive:** `JeetkResponsiveLayout` selects compact, medium, or expanded builders.
- **Page structure:** `JeetkPageScaffold` applies the shared page gutter; `JeetkSectionHeader` standardizes section titles and actions.
- **Overlays:** `JeetkModal.show` and `JeetkBottomSheet.show` provide themed dialog and sheet patterns.

The example app's dashboard icon opens a showcase with an Arabic/English direction toggle, responsive grid, modal, and bottom sheet.
