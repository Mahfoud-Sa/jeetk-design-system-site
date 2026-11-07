# Component states

States describe a component's interaction or data condition. Apply only the states that make sense for that component; they are not ten visual variants that every widget must support.

| State | Use | Typical components |
|---|---|---|
| Default | Resting, available baseline | Buttons, fields, navigation, cards |
| Hover | Pointer is over an interactive target | Buttons, links, menu items, selectable cards (desktop/web) |
| Focused | Keyboard or accessibility focus is on the target | Actions, fields, tabs, menu items |
| Pressed | Pointer/key activation is in progress | Buttons, icon buttons, selectable rows |
| Disabled | Action or input is currently unavailable | Buttons, fields, menu items, navigation destinations |
| Loading | Async action is running; prevent duplicate activation | Submit/action buttons, refresh controls |
| Error | Input invalid or operation failed | Fields, banners, status indicators |
| Success | Operation completed or data is valid | Banners, chips, inline feedback |
| Selected | Persistent choice among options | Tabs, navigation destinations, checkable controls, selected rows |
| Read-only | Value is visible but cannot be edited | Text fields and data views |

Keep hover, focus, and pressed visually distinct. Focus must remain visible during keyboard navigation, and disabled controls should not imply availability. Loading controls should communicate progress and avoid repeat action. Error and success need text or semantics in addition to color. Read-only should remain legible and distinct from a disabled field.

In the example app, open the touch icon from the foundations screen. Use a mouse to inspect hover, press Tab to inspect focus, Enter/Space to change the selected sample, and use the loading button to see its temporary state. The input examples demonstrate error and read-only behavior.
