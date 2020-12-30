import Province from './Province.mjs';
import assert from 'assert';
function sampleProvinceData(){
    return {
        name:"Asia",
        producers:[
            {name:"Byzantium", cost:10, production:9},
            {name:"Attalia",cost:12,production:10},
            {name:"Sinope",cost:10,production:6},
        ],
        demand:30,
        price:20
    }
}

describe('province',function(){
    let asia;
    beforeEach(function(){
        asia = new Province(sampleProvinceData());
    })
    it('shortfall',function(){
        assert.equal(asia.shortfall,5);
    })
    it('profit',function(){
        assert.equal(asia.profit,230);
    })
    it('change production',function(){
        asia.producers[0].production = 20;
        assert.equal(asia.shortfall,-6);
        assert.equal(asia.profit,292);
    })
})