import BoxStore, { BoxStyle } from "@/Components/Atom/Box/BoxStore";
import TextStore, { TextStyle } from "@/Components/Atom/Text/TextStore";

interface Props {
  children: React.ReactNode;
  clickHandler?: () => void
}
export default function ButtonButtonNavy({ children, clickHandler }: Props) {
  return (
    <BoxStore boxStyle={BoxStyle.BOX_RECTANGLE_LONG_NAVY} clickHandler={clickHandler}>
      <TextStore textStyle={TextStyle.TEXT_E_32} style="text-white m-auto">{children}</TextStore>
    </BoxStore>
  )
}