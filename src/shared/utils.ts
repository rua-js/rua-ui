export function shouldUseTouchable(props)
{
  return props.onClick
    || props.onPress
    || props.onLongPress
    || props.onPressIn
    || props.onPressOut
}