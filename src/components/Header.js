export default class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <h1>Header</h1>

        <style jsx>{`
          .Header {
            grid-area: Header;
            background: #4756ca;
          }
        `}</style>
      </div>
    );
  }
}
