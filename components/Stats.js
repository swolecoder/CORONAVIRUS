import useStats from '../utils/useStats';
export default function Stats(props) {
  const stats = useStats(props.url);

  if (!stats) return <p> Loading.....</p>;
  console.log('I am here ', stats);
  return (
    <div>
      <div>
        <h1> Confirmed</h1>
        <p>{(stats && stats.confirmed && stats.confirmed.value) || 0}</p>
      </div>
      <div>
        <h1> Deadths</h1>
        <p>{(stats && stats.deaths && stats.deaths.value) || 0}</p>
      </div>
      <div>
        <h1> Recovered</h1>
        <p>{(stats && stats.recovered && stats.recovered.value) || 0}</p>
      </div>
    </div>
  );
}
