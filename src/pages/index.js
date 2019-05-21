import Header from "../components/Header";

export default class extends React.Component {
  render() {
    return (
      <div className="Container">
        <Header className="items Header" />
        <div className="items Banner">Foto</div>
        <div className="items Jhurgen">Mi info</div>
        <div className="items Projects">Mis proyectos</div>
        <div className="items Certificates" />
        <div className="items Contacts" />

        <style jsx>{`
          .items {
            height: 100%;
            width: 100%;
            border: 1px solid red;
          }
          .Container {
            background: #eff0f4;
            display: grid;
            grid-template: 75px 300px 400px 400px 400px 150px / repeat(
                3,
                minmax(200px, 500px)
              );
            grid-gap: 0px 0px;

            grid-template-areas:
              "Header         Header          Header"
              "Banner         Banner          Banner"
              "Jhurgen        Jhurgen         Jhurgen"
              "Projects       Projects        Projects"
              "Certificates   Certificates    Certificates"
              "Contacts       Contacts        Contacts";

            justify-content: center;
          }

          .Banner {
            background: #3186b2;
            grid-area: Banner;
          }
          .Jhurgen {
            grid-area: Jhurgen;
            background: #0fc9e7;
          }
          .Projects {
            grid-area: Projects;
            background: #fcfcfc;
          }
          .Certificates {
            grid-area: Certificates;
            background: #429ffd;
          }
          .Contacts {
            grid-area: Contacts;
            background: #2f4bff;
          }
        `}</style>

        <style jsx global>{`
            body{
                font-family:Arial;
                margin:0;
            }
            `}</style>
      </div>
    );
  }
}
