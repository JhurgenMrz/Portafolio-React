export default class extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="items Header" >Header</div>
        <div className="items Banner" >Foto</div>
        <div className="items Jhurgen" >Mi info</div>
        <div className="items Projects" >Mis proyectos</div>
        <div className="items Certificates" />
        <div className="items Contacts" />

        <style jsx>{`
          .items {
            height: 100%;
            width: 100%;
            border: 1px solid red;
          }
          .Container {
            background: white;
            display: grid;
            grid-template: 100px 300px 400px 400px 400px 150px / repeat(3,minmax(200px,500px));
            grid-gap: 0px 0px;

            grid-template-areas:
              "Header         Header          Header"
              "Banner         Banner          Banner"
              "Jhurgen        Jhurgen         Jhurgen"
              "Projects       Projects        Projects"
              "Certificates   Certificates    Certificates"
              "Contacts       Contacts        Contacts";

            justify-content:center;
          }
          .Header {
            grid-area: Header;
            background: Blue;
          }
          .Banner {
            grid-area: Banner;
          }
          .Jhurgen {
            grid-area: Jhurgen;
          }
          .Projects {
            grid-area: Projects;
          }
          .Certificates {
            grid-area: Certificates;
          }
          .Contacts {
            grid-area: Contacts;
          }
        `}</style>
      </div>
    );
  }
}
