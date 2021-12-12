import './DailyGrid.css';

function DailyGrid() {
  return (
    <section id="daily-grid">
      <div className="DailyGrid">
        <div class="grid-row">
          <div class="grid-header "></div>
          <div class="grid-header row0 col1">1</div>
          <div class="grid-header row0 col2">2</div>
          <div class="grid-header row0 col3">3</div>
          <div class="grid-header row0 col4">4</div>
          <div class="grid-header row0 col5">5</div>
          <div class="grid-header row0 col6">6</div>
        </div>
        <div class="grid-row">
          <div class="grid-header row1 col0">1</div>
          <div class="grid-space  row1 col1"></div>
          <div class="grid-space  row1 col2"> <span class="circled">M</span> </div>
          <div class="grid-space  row1 col3"> <span> M </span> </div>
          <div class="grid-space  row1 col4"> <span> M </span> </div> 
          <div class="grid-space  row1 col5"></div>
          <div class="grid-space  row1 col6"></div>
        </div>
        <div class="grid-row">
          <div class="grid-header row2 col0">2</div>
          <div class="grid-space  row2 col1"></div>
          <div class="grid-space  row2 col2"></div>
          <div class="grid-space  row2 col3"></div>
          <div class="grid-space  row2 col4"> <span> M </span> </div>
          <div class="grid-space  row2 col5"></div>
          <div class="grid-space  row2 col6"></div>
        </div>
        <div class="grid-row">
          <div class="grid-header row3 col0">3</div>
          <div class="grid-space  row3 col1"></div>
          <div class="grid-space  row3 col2"></div>
          <div class="grid-space  row3 col3"></div>
          <div class="grid-space  row3 col4"></div>
          <div class="grid-space  row3 col5"></div>
          <div class="grid-space  row3 col6"></div>
        </div>

        <div class="grid-row">
          <div class="grid-header row4 col0">4</div>
          <div class="grid-space  row4 col1"></div>
          <div class="grid-space  row4 col2"></div>
          <div class="grid-space  row4 col3"></div>
          <div class="grid-space  row4 col4"></div>
          <div class="grid-space  row4 col5"></div>
          <div class="grid-space  row4 col6"></div>
        </div>
        <div class="grid-row">
          <div class="grid-header row5 col0">5</div>
          <div class="grid-space  row5 col1"></div>
          <div class="grid-space  row5 col2"></div>
          <div class="grid-space  row5 col3"></div>
          <div class="grid-space  row5 col4"></div>
          <div class="grid-space  row5 col5"></div>
          <div class="grid-space  row5 col6"></div>
        </div>
        <div class="grid-row">
          <div class="grid-header row6 col0">6</div>
          <div class="grid-space  row6 col1"> <span> W </span> </div>
          <div class="grid-space  row6 col2"> <span> W </span> </div>
          <div class="grid-space  row6 col3"> <span> W </span> </div>
          <div class="grid-space  row6 col4"> <span> W </span> </div>
          <div class="grid-space  row6 col5"> <span> W </span> </div>
          <div class="grid-space  row6 col6"> <span> W </span> </div>
        </div>
      </div>
    </section>
  );
}

export default DailyGrid;
