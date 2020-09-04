import React from 'react'
import { bk, bb, bh, bp, bq, br, ee, wb, wh, wk, wp, wq, wr } from '../../../../assets/index_img'
import classes from './imgBlock.module.css'


const get_img_tag = (element, i,child) => {
    //element = passed piece name
    switch (element) {
        case 'br1': return <img src={br} key={'i' + i} alt={'br1'+classes.pieces} className={classes.pieces}></img>
        case 'br2': return <img src={br} key={'i' + i} alt={'br2'+classes.pieces} className={classes.pieces}></img>
        case 'bb1': return <img src={bb} key={'i' + i} alt={'bb1'+classes.pieces} className={classes.pieces}></img>
        case 'bb2': return <img src={bb} key={'i' + i} alt={'bb2'+classes.pieces} className={classes.pieces}></img>
        case 'bh1': return <img src={bh} key={'i' + i} alt={'bh1'+classes.pieces} className={classes.pieces}></img>
        case 'bh2': return <img src={bh} key={'i' + i} alt={'bh2'+classes.pieces} className={classes.pieces}></img>
        case 'bk1': return <img src={bk} key={'i' + i} alt={'bk1'+classes.pieces} className={classes.pieces}></img>
        case 'bp1': return <img src={bp} key={'i' + i} alt={'bp1'+classes.pieces} className={classes.pieces}></img>
        case 'bp2': return <img src={bp} key={'i' + i} alt={'bp2'+classes.pieces} className={classes.pieces}></img>
        case 'bp3': return <img src={bp} key={'i' + i} alt={'bp3'+classes.pieces} className={classes.pieces}></img>
        case 'bp4': return <img src={bp} key={'i' + i} alt={'bp4'+classes.pieces} className={classes.pieces}></img>
        case 'bp5': return <img src={bp} key={'i' + i} alt={'bp5'+classes.pieces} className={classes.pieces}></img>
        case 'bp6': return <img src={bp} key={'i' + i} alt={'bp6'+classes.pieces} className={classes.pieces}></img>
        case 'bp7': return <img src={bp} key={'i' + i} alt={'bp7'+classes.pieces} className={classes.pieces}></img>
        case 'bp8': return <img src={bp} key={'i' + i} alt={'bp8'+classes.pieces} className={classes.pieces}></img>
        case 'bq1': return <img src={bq} key={'i' + i} alt={'bq1'+classes.pieces} className={classes.pieces}></img>
        case 'ee1': return <img src={ee} key={'i' + i} alt={'ee1'+classes.pieces} className={classes.pieces}></img>
        case 'ee2': return <img src={ee} key={'i' + i} alt={'ee2'+classes.pieces} className={classes.pieces}></img>
        case 'ee3': return <img src={ee} key={'i' + i} alt={'ee3'+classes.pieces} className={classes.pieces}></img>
        case 'ee4': return <img src={ee} key={'i' + i} alt={'ee4'+classes.pieces} className={classes.pieces}></img>
        case 'ee5': return <img src={ee} key={'i' + i} alt={'ee5'+classes.pieces} className={classes.pieces}></img>
        case 'ee6': return <img src={ee} key={'i' + i} alt={'ee6'+classes.pieces} className={classes.pieces}></img>
        case 'ee7': return <img src={ee} key={'i' + i} alt={'ee7'+classes.pieces} className={classes.pieces}></img>
        case 'ee8': return <img src={ee} key={'i' + i} alt={'ee8'+classes.pieces} className={classes.pieces}></img>
        case 'ee9': return <img src={ee} key={'i' + i} alt={'ee9'+classes.pieces} className={classes.pieces}></img>
        case 'ee10': return <img src={ee} key={'i' + i} alt={'ee10'+classes.pieces} className={classes.pieces}></img>
        case 'ee11': return <img src={ee} key={'i' + i} alt={'ee11'+classes.pieces} className={classes.pieces}></img>
        case 'ee12': return <img src={ee} key={'i' + i} alt={'ee12'+classes.pieces} className={classes.pieces}></img>
        case 'ee13': return <img src={ee} key={'i' + i} alt={'ee13'+classes.pieces} className={classes.pieces}></img>
        case 'ee14': return <img src={ee} key={'i' + i} alt={'ee14'+classes.pieces} className={classes.pieces}></img>
        case 'ee15': return <img src={ee} key={'i' + i} alt={'ee15'+classes.pieces} className={classes.pieces}></img>
        case 'ee16': return <img src={ee} key={'i' + i} alt={'ee16'+classes.pieces} className={classes.pieces}></img>
        case 'ee17': return <img src={ee} key={'i' + i} alt={'ee17'+classes.pieces} className={classes.pieces}></img>
        case 'ee18': return <img src={ee} key={'i' + i} alt={'ee18'+classes.pieces} className={classes.pieces}></img>
        case 'ee19': return <img src={ee} key={'i' + i} alt={'ee19'+classes.pieces} className={classes.pieces}></img>
        case 'ee20': return <img src={ee} key={'i' + i} alt={'ee20'+classes.pieces} className={classes.pieces}></img>
        case 'ee21': return <img src={ee} key={'i' + i} alt={'ee21'+classes.pieces} className={classes.pieces}></img>
        case 'ee22': return <img src={ee} key={'i' + i} alt={'ee22'+classes.pieces} className={classes.pieces}></img>
        case 'ee23': return <img src={ee} key={'i' + i} alt={'ee23'+classes.pieces} className={classes.pieces}></img>
        case 'ee24': return <img src={ee} key={'i' + i} alt={'ee24'+classes.pieces} className={classes.pieces}></img>
        case 'ee25': return <img src={ee} key={'i' + i} alt={'ee25'+classes.pieces} className={classes.pieces}></img>
        case 'ee26': return <img src={ee} key={'i' + i} alt={'ee26'+classes.pieces} className={classes.pieces}></img>
        case 'ee27': return <img src={ee} key={'i' + i} alt={'ee27'+classes.pieces} className={classes.pieces}></img>
        case 'ee28': return <img src={ee} key={'i' + i} alt={'ee28'+classes.pieces} className={classes.pieces}></img>
        case 'ee29': return <img src={ee} key={'i' + i} alt={'ee29'+classes.pieces} className={classes.pieces}></img>
        case 'ee30': return <img src={ee} key={'i' + i} alt={'ee30'+classes.pieces} className={classes.pieces}></img>
        case 'ee31': return <img src={ee} key={'i' + i} alt={'ee31'+classes.pieces} className={classes.pieces}></img>
        case 'ee32': return <img src={ee} key={'i' + i} alt={'ee32'+classes.pieces} className={classes.pieces}></img>
        case 'wr1': return <img src={wr} key={'i' + i} alt={'wr1'+classes.pieces} className={classes.pieces}></img>
        case 'wr2': return <img src={wr} key={'i' + i} alt={'wr2'+classes.pieces} className={classes.pieces}></img>
        case 'wb1': return <img src={wb} key={'i' + i} alt={'wb1'+classes.pieces} className={classes.pieces}></img>
        case 'wb2': return <img src={wb} key={'i' + i} alt={'wb2'+classes.pieces} className={classes.pieces}></img>
        case 'wh1': return <img src={wh} key={'i' + i} alt={'wh1'+classes.pieces} className={classes.pieces}></img>
        case 'wh2': return <img src={wh} key={'i' + i} alt={'wh2'+classes.pieces} className={classes.pieces}></img>
        case 'wk1': return <img src={wk} key={'i' + i} alt={'wk1'+classes.pieces} className={classes.pieces}></img>
        case 'wp1': return <img src={wp} key={'i' + i} alt={'wp1'+classes.pieces} className={classes.pieces}></img>
        case 'wp2': return <img src={wp} key={'i' + i} alt={'wp2'+classes.pieces} className={classes.pieces}></img>
        case 'wp3': return <img src={wp} key={'i' + i} alt={'wp3'+classes.pieces} className={classes.pieces}></img>
        case 'wp4': return <img src={wp} key={'i' + i} alt={'wp4'+classes.pieces} className={classes.pieces}></img>
        case 'wp5': return <img src={wp} key={'i' + i} alt={'wp5'+classes.pieces} className={classes.pieces}></img>
        case 'wp6': return <img src={wp} key={'i' + i} alt={'wp6'+classes.pieces} className={classes.pieces}></img>
        case 'wp7': return <img src={wp} key={'i' + i} alt={'wp7'+classes.pieces} className={classes.pieces}></img>
        case 'wp8': return <img src={wp} key={'i' + i} alt={'wp8'+classes.pieces} className={classes.pieces}></img>
        case 'wq1': return <img src={wq} key={'i' + i} alt={'wq1'+classes.pieces} className={classes.pieces}></img>
        default:
            console.log('switch default <<<<', element, i)          // for A-H,1-8
    return <h3>{child}</h3>
    }
}

export default (props) => {
    //return picture
    let i = get_img_tag(props.piece, props.id,props.child)
    return (
        i
    );
}
