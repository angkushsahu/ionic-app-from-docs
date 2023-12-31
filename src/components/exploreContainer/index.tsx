import "./styles.css";

interface ContainerProps {
   name: string;
}

export default function ExploreContainer({ name }: ContainerProps) {
   return (
      <div className="container">
         <strong>{name}</strong>
         <p>
            Explore{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
               UI Components
            </a>
         </p>
      </div>
   );
}
