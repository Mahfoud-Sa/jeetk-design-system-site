# JEETK components: Buttons & actions, Feedback & Status

Import the public API from `package:jeetk_design_system/jeetk_design_system.dart`. All components use the active JEETK palette and typography theme.

## Buttons & actions

`JeetkButton` supports five intent variants:

| Variant | Use |
| --- | --- |
| `primary` | Main action on the current screen or form. |
| `secondary` | Supporting action with a soft filled surface. |
| `outlined` | Alternate action that needs a visible boundary. |
| `text` | Low emphasis action within a card or feedback message. |
| `destructive` | Actions that remove, cancel, or otherwise have a negative effect. |

`JeetkButtonSize` provides `compact`, `regular`, and `large`. Compact and regular buttons preserve the 48 px minimum touch height; large buttons use 56 px. Use `leading` and `trailing` for optional icons, `expand` for full-width actions, and `isLoading` while an operation is in progress. Set `onPressed: null` for the disabled state. The widget keeps the action label visible during loading and announces state changes through a live region.

```dart
JeetkButton(
  label: 'متابعة الطلب',
  leading: const Icon(JeetkIcons.forward),
  variant: JeetkButtonVariant.primary,
  onPressed: submitOrder,
  expand: true,
)
```

`JeetkIconButton` is for compact icon-only actions. It requires a `tooltip`, which is also exposed as its accessible label. Variants are `plain`, `tonal`, `filled`, `outlined`, and `destructive`; it supports loading and uses the 48 px minimum target.

```dart
JeetkIconButton(
  icon: JeetkIcons.favorite,
  tooltip: 'أضف إلى المفضلة',
  onPressed: addToFavorites,
)
```

## Feedback & Status

`JeetkStatusChip` is a compact persistent label for an order or delivery state: pending, success, error, or neutral. The text label communicates the state in addition to its color.

`JeetkFeedbackBanner` is for important information that should remain visible in page content. Choose `JeetkFeedbackKind.info`, `.success`, `.warning`, or `.error`; an optional title, action, dismiss action, and `liveRegion` are available.

```dart
JeetkFeedbackBanner(
  kind: JeetkFeedbackKind.error,
  title: 'تعذر الدفع',
  message: 'تحقق من معلومات البطاقة وحاول مرة أخرى.',
  actionLabel: 'إعادة المحاولة',
  onAction: retryPayment,
)
```

`JeetkFeedback.showSnackBar` is for brief confirmation or transient updates. It replaces any current snackbar to keep the feedback queue clear. Use an inline banner for a message the user needs to keep available while continuing their task.

```dart
JeetkFeedback.showSnackBar(
  context: context,
  message: 'تم تحديث حالة الطلب',
  kind: JeetkFeedbackKind.success,
  actionLabel: 'تراجع',
  onAction: undoUpdate,
)
```

The example app includes all variants and states in the **Buttons & actions** and **Feedback & Status** sections. Run it from the repository's `example/` directory.
