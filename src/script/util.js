const Util = {
  randomVec(length) {
    const degX = 2 * Math.PI * Math.random(); 
    const degY = (Math.random() * (.6) - .3);
  
  
    return Util.scale([Math.sin(degX)/2, degY], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1]];
  },


}


export {Util};