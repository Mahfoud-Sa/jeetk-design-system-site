# Navigation components

Navigation components share `JeetkNavigationItem` so horizontal navigation, the drawer, and bottom navigation can use the same destination labels and icons.

## App bars and back actions

`JeetkAppBar` wraps Flutter's app bar with optional directional back navigation through `JeetkBackButton`. Set `showBackButton: true`, or provide `leading` for a custom leading action. `onBack` overrides the default `Navigator.maybePop` behavior.

## Destination navigation

- `JeetkNavigationBar` is a horizontally scrollable section bar. `selectedIndex` is zero-based and `onSelected` reports the selected destination.
- `JeetkNavigationDrawer` is a drawer with optional header and footer. Close the enclosing drawer after handling a selection.
- `JeetkBottomNavigationBar` is Material 3 bottom navigation and supports `NavigationDestinationLabelBehavior`.

All three accept `List<JeetkNavigationItem>` for consistent destinations.

## In-page navigation

- `JeetkTabBar` works with `DefaultTabController` or an explicit `TabController`.
- `JeetkBreadcrumbs` displays a scrollable hierarchy; the last item is marked as the current page.
- `JeetkPagination` uses one-based page numbers and bounds the visible page buttons.
- `JeetkStepper` uses a zero-based `currentStep`; optionally provide `onStepTapped` to make steps interactive.

## Menus

- `JeetkDropdownMenu<T>` is a theme-aware form dropdown with optional icons, disabled items, and validation.
- `JeetkContextMenu<T>` opens on touch-and-hold or secondary click, supports disabled and destructive items, and returns the selected value through `onSelected`.

## Example

Run the example app and choose the navigation icon in the foundations app bar. The navigation showcase demonstrates these widgets together in Arabic RTL, with live selection state and the active theme.
