export const Progress = ({ wattsMax, wattsUsage }) => {

  let watts = (wattsUsage * 100) / wattsMax;

  // JSX
  return (
    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${watts > 100 ? 'bg-danger' : 'bg-info'}`}
        style={{width: `${watts}%`}}></div>
    </div>
  )
}
