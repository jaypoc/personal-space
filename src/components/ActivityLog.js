import './ActivityLog.css';

const logitems = [];

for (var i=1; i <= 18; i++) { logitems.push(i) }

function DailyGrid() {
  return (
    <section id="activity-log">
      <div className="ActivityLog">
 
        {logitems.map( 
            i => { 
                const xyz = ["M","W"]
                const zyx = ["Walked to work","Worked"]
                return(
                    <div class="row1">
                        <div class="numbercell">{i}</div>
                        <div class="letterbox">{xyz[i-1]}</div>
                        <div class="textbox">{zyx[i-1]}</div>
                    </div>
                ) 
            } 
        )}
          
          
      </div>
    </section>
  );
}

export default DailyGrid;
