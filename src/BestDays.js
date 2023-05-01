const BestDays = ({ data }) => {
  return (
    <div className="card mb-2">
      <div className="mb-2">
        <h3 className="mb">Summary:</h3>
        <div className="mb">
          <div className="mb">
            <b>🌨️ 2 upcoming storms</b>
          </div>
          <div className="mb">
            <ul>
              <li>Storm 1: Tuesday night - Thursday Night</li>
              <li>Storm 2: Sunday - next Monday</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="mb">Best days for:</h3>
      <div className="mb">
        {Object.entries(data).map(([name, { days, title }]) => (
          <div className="mb" key={name}>
            <b title={title}>{name}</b>
            <ul>
              {days.map(({ description, info }) => (
                <li key={description}>
                  <div>{description}</div>
                  <div className="info">{info}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex">
        <div>*</div>
        <div className="ml">
          Backcountry disclaimer: Check
          <br />
          <a href="https://utahavalanchecenter.org/forecast/salt-lake">
            your local avalanche forecast
          </a>
          <br />
          before heading out of bounds.
        </div>
      </div>
    </div>
  );
};

export default BestDays;
