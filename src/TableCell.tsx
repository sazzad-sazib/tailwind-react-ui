import React from 'react'
import clsx from 'clsx'
import styles from './themes/default'

interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, Props>(function TableCell(props, ref) {
  const { className, children, ...other } = props

  const { tableCell } = styles

  const baseStyle = tableCell.base

  const cls = clsx(baseStyle, className)

  return (
    <td className={cls} ref={ref} {...other}>
      {children}
    </td>
  )
})

export default TableCell
