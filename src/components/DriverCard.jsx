function DriverCard(props) {
  return (
    <div className="driver-card">
      <h3>{props.name}</h3>
      <p>{props.team}</p>
    </div>
  )
}

export default DriverCard