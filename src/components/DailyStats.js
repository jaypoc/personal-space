import './DailyStats.css'

function DailyStats(){
    return(
        <section id="daily-stats">
            <div className="DailyStats">
                <div class="grid-row">
                <div class="grid-header row0 col1">Speed</div>
                <div class="grid-header row0 col2">Energy</div>
                <div class="grid-header row0 col3">Mood</div>
                <div class="grid-header row0 col4">Luck</div>
                <div class="grid-header row0 col5">Brainpower</div>
                <div class="grid-header row0 col6">Creativity</div>
                </div>

                <div class="grid-row">
                <div class="grid-space  row1 col1"> </div>
                <div class="grid-space  row1 col2"> </div>
                <div class="grid-space  row1 col3"> </div>
                <div class="grid-space  row1 col4"> </div> 
                <div class="grid-space  row1 col5"> </div>
                <div class="grid-space  row1 col6"> </div>
                </div>

                <div class="grid-row">
                <div class="grid-header row0 col1">Move = n; Spend to Add 1 Move</div>
                <div class="grid-header row0 col2">Rows/Cols = n</div>
                <div class="grid-header row0 col3">Adjust per turn</div>
                <div class="grid-header row0 col4">Spend to re-roll</div>
                <div class="grid-header row0 col5">Spend to +/- 1 to any roll</div>
                <div class="grid-header row0 col6">Soend to replace with this value</div>
                </div>
            </div>
        </section>
    )
}

export default DailyStats;
