
interface SalesProps {
  percent: number;
  category?: string;
}

// class Sales extends Component<SalesProps> {

//   public constructor(props: SalesProps) {
//     super(props);
//   }

//   public render(): JSX.Element {
//     return (
//       <div className="sales box">
//         <p>Sale: {this.props.percent}% off on all {this.props.category || "Products"}!!</p>
//       </div>
//     )
//   }
// }

function Sales(props: SalesProps): JSX.Element {
  return (
    <div className="sales box">
      <p>Sale: {props.percent}% off on all {props.category || "Products"}!!</p>
    </div>
  )
}

export default Sales;