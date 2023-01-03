import { Progress } from "../manager/Progress"
import { Electrodomestic } from "./Electrodomestic"

export const Apartment = ({ id, electrodomestics, wattsMax }) => {

  // JSX
  return (
    <li className="apartment list-group-item">
      Apartment
      <hr />
      <Progress apartmentId={id} electrodomestics={electrodomestics} wattsMax={wattsMax} />
      <br />
      <div className="electrodomestics">
        {
          electrodomestics.map((electrodomestic) => (
            <Electrodomestic key={electrodomestic.id} apartmentId={id} {...electrodomestic} />
          ))
        }
      </div>
    </li>
  )
}
