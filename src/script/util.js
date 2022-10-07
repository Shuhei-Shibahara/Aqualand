const Util = {
  randomVec(length) {
    const degX = 2 * Math.PI * Math.random(); 
    const degY = (Math.random() * (0.5- (-0.5)) - 0.5);
  
    // debugger
  
    return Util.scale([Math.sin(degX), degY], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1]];
  },


}


export {Util};