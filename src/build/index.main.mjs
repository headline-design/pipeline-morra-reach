// Automatically generated with Reach 0.1.4
/* eslint-disable */
export const _version = '0.1.4';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v58 = await ctc.creationTime();
  const v59 = await ctc.creationSecs();
  
  const v420 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v420],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v420, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v424] = txn1.data;
      const v425 = txn1.time;
      const v426 = txn1.secs;
      const v423 = txn1.from;
      
      sim_r.txns.push({
        amt: v424,
        kind: 'to',
        tok: undefined
        });
      const v430 = stdlib.add(v425, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const [v424] = txn1.data;
  const v425 = txn1.time;
  const v426 = txn1.secs;
  const v423 = txn1.from;
  ;
  const v430 = stdlib.add(v425, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v430],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v423, v424, v430],
      evt_cnt: 0,
      funcNum: 3,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [] = txn3.data;
        const v685 = txn3.time;
        const v686 = txn3.secs;
        const v684 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v688 = stdlib.addressEq(v423, v684);
        stdlib.assert(v688, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v424,
          kind: 'from',
          to: v423,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v685 = txn3.time;
    const v686 = txn3.secs;
    const v684 = txn3.from;
    ;
    const v688 = stdlib.addressEq(v423, v684);
    stdlib.assert(v688, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v435 = txn2.time;
    const v436 = txn2.secs;
    const v434 = txn2.from;
    const v438 = stdlib.add(v424, v424);
    ;
    let v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v440 = v435;
    let v446 = v438;
    
    while ((() => {
      const v454 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v454;})()) {
      const v456 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const v460 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:103:48:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v461 = stdlib.protect(ctc0, await interact.getGuess(v460), {
        at: './index.rsh:104:44:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.log(v460), {
        at: './index.rsh:106:23:application',
        fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'log',
        who: 'Alice'
        });
      const v462 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:111:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v463 = stdlib.digest(ctc2, [v462, v460]);
      const v465 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:113:62:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v466 = stdlib.digest(ctc2, [v465, v461]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v423, v424, v434, v446, v456, v463],
        evt_cnt: 1,
        funcNum: 6,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [v469] = txn3.data;
          const v470 = txn3.time;
          const v471 = txn3.secs;
          const v468 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v473 = stdlib.addressEq(v423, v468);
          stdlib.assert(v473, {
            at: './index.rsh:117:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v475 = stdlib.add(v470, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v456],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v652 = txn4.time;
        const v653 = txn4.secs;
        const v651 = txn4.from;
        ;
        const v655 = stdlib.addressEq(v434, v651);
        stdlib.assert(v655, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const [v469] = txn3.data;
        const v470 = txn3.time;
        const v471 = txn3.secs;
        const v468 = txn3.from;
        ;
        const v473 = stdlib.addressEq(v423, v468);
        stdlib.assert(v473, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v475 = stdlib.add(v470, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.sendrecv({
          args: [v423, v424, v434, v446, v469, v475, v466],
          evt_cnt: 1,
          funcNum: 8,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const [v478] = txn4.data;
            const v479 = txn4.time;
            const v480 = txn4.secs;
            const v477 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v482 = stdlib.addressEq(v423, v477);
            stdlib.assert(v482, {
              at: './index.rsh:121:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v484 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v475],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v635 = txn5.time;
          const v636 = txn5.secs;
          const v634 = txn5.from;
          ;
          const v638 = stdlib.addressEq(v434, v634);
          stdlib.assert(v638, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          }
        else {
          const [v478] = txn4.data;
          const v479 = txn4.time;
          const v480 = txn4.secs;
          const v477 = txn4.from;
          ;
          const v482 = stdlib.addressEq(v423, v477);
          stdlib.assert(v482, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v484 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const txn5 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc0],
            timeoutAt: ['time', v484],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v423, v424, v434, v446, v469, v478, v484],
              evt_cnt: 0,
              funcNum: 11,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const [] = txn6.data;
                const v618 = txn6.time;
                const v619 = txn6.secs;
                const v617 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v621 = stdlib.addressEq(v423, v617);
                stdlib.assert(v621, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                sim_r.txns.push({
                  amt: v446,
                  kind: 'from',
                  to: v423,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v618 = txn6.time;
            const v619 = txn6.secs;
            const v617 = txn6.from;
            ;
            const v621 = stdlib.addressEq(v423, v617);
            stdlib.assert(v621, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            }
          else {
            const [v491] = txn5.data;
            const v492 = txn5.time;
            const v493 = txn5.secs;
            const v490 = txn5.from;
            ;
            const v495 = stdlib.addressEq(v434, v490);
            stdlib.assert(v495, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v497 = stdlib.add(v492, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.recv({
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc0],
              timeoutAt: ['time', v497],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v423, v424, v434, v446, v469, v478, v491, v497],
                evt_cnt: 0,
                funcNum: 13,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const [] = txn7.data;
                  const v601 = txn7.time;
                  const v602 = txn7.secs;
                  const v600 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v604 = stdlib.addressEq(v423, v600);
                  stdlib.assert(v604, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  sim_r.txns.push({
                    amt: v446,
                    kind: 'from',
                    to: v423,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v601 = txn7.time;
              const v602 = txn7.secs;
              const v600 = txn7.from;
              ;
              const v604 = stdlib.addressEq(v423, v600);
              stdlib.assert(v604, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              }
            else {
              const [v500] = txn6.data;
              const v501 = txn6.time;
              const v502 = txn6.secs;
              const v499 = txn6.from;
              ;
              const v504 = stdlib.addressEq(v434, v499);
              stdlib.assert(v504, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v506 = stdlib.add(v501, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.sendrecv({
                args: [v423, v424, v434, v446, v469, v478, v491, v500, v506, v462, v460],
                evt_cnt: 2,
                funcNum: 14,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const [v511, v512] = txn7.data;
                  const v513 = txn7.time;
                  const v514 = txn7.secs;
                  const v510 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v516 = stdlib.addressEq(v423, v510);
                  stdlib.assert(v516, {
                    at: './index.rsh:154:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v517 = stdlib.digest(ctc2, [v511, v512]);
                  const v518 = stdlib.digestEq(v469, v517);
                  stdlib.assert(v518, {
                    at: 'reach standard library:65:17:application',
                    fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v520 = stdlib.add(v513, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v506],
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.recv({
                  evt_cnt: 0,
                  funcNum: 15,
                  out_tys: [],
                  timeoutAt: undefined,
                  waitIfNotPresent: false
                  }));
                const [] = txn8.data;
                const v584 = txn8.time;
                const v585 = txn8.secs;
                const v583 = txn8.from;
                ;
                const v587 = stdlib.addressEq(v434, v583);
                stdlib.assert(v587, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                }
              else {
                const [v511, v512] = txn7.data;
                const v513 = txn7.time;
                const v514 = txn7.secs;
                const v510 = txn7.from;
                ;
                const v516 = stdlib.addressEq(v423, v510);
                stdlib.assert(v516, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v517 = stdlib.digest(ctc2, [v511, v512]);
                const v518 = stdlib.digestEq(v469, v517);
                stdlib.assert(v518, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v520 = stdlib.add(v513, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.sendrecv({
                  args: [v423, v424, v434, v446, v478, v491, v500, v512, v520, v465, v461],
                  evt_cnt: 2,
                  funcNum: 16,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const [v523, v524] = txn8.data;
                    const v525 = txn8.time;
                    const v526 = txn8.secs;
                    const v522 = txn8.from;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v528 = stdlib.addressEq(v423, v522);
                    stdlib.assert(v528, {
                      at: './index.rsh:160:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    const v529 = stdlib.digest(ctc2, [v523, v524]);
                    const v530 = stdlib.digestEq(v478, v529);
                    stdlib.assert(v530, {
                      at: 'reach standard library:65:17:application',
                      fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                      msg: null,
                      who: 'Alice'
                      });
                    const v532 = stdlib.add(v525, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v520],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.recv({
                    evt_cnt: 0,
                    funcNum: 17,
                    out_tys: [],
                    timeoutAt: undefined,
                    waitIfNotPresent: false
                    }));
                  const [] = txn9.data;
                  const v567 = txn9.time;
                  const v568 = txn9.secs;
                  const v566 = txn9.from;
                  ;
                  const v570 = stdlib.addressEq(v434, v566);
                  stdlib.assert(v570, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  }
                else {
                  const [v523, v524] = txn8.data;
                  const v525 = txn8.time;
                  const v526 = txn8.secs;
                  const v522 = txn8.from;
                  ;
                  const v528 = stdlib.addressEq(v423, v522);
                  stdlib.assert(v528, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v529 = stdlib.digest(ctc2, [v523, v524]);
                  const v530 = stdlib.digestEq(v478, v529);
                  stdlib.assert(v530, {
                    at: 'reach standard library:65:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v532 = stdlib.add(v525, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const v536 = stdlib.add(v512, v491);
                  stdlib.protect(ctc1, await interact.seeWinning(v536), {
                    at: './index.rsh:168:30:application',
                    fs: ['at ./index.rsh:166:15:application call to [unknown function] (defined at: ./index.rsh:166:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn9 = await (ctc.sendrecv({
                    args: [v423, v424, v434, v446, v491, v500, v512, v524, v532, v536],
                    evt_cnt: 1,
                    funcNum: 18,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                      
                      const [v538] = txn9.data;
                      const v539 = txn9.time;
                      const v540 = txn9.secs;
                      const v537 = txn9.from;
                      
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                        });
                      const v542 = stdlib.addressEq(v423, v537);
                      stdlib.assert(v542, {
                        at: './index.rsh:171:11:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Alice'
                        });
                      let v543;
                      const v544 = stdlib.eq(v524, v500);
                      if (v544) {
                        v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                        }
                      else {
                        const v545 = stdlib.add(v512, v491);
                        const v546 = stdlib.eq(v545, v524);
                        if (v546) {
                          v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                          }
                        else {
                          const v548 = stdlib.eq(v545, v500);
                          if (v548) {
                            v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                            }
                          else {
                            v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                            }
                          }
                        }
                      const cv439 = v543;
                      const cv440 = v539;
                      const cv446 = v446;
                      
                      (() => {
                        const v439 = cv439;
                        const v440 = cv440;
                        const v446 = cv446;
                        
                        if ((() => {
                          const v454 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v454;})()) {
                          const v456 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                          sim_r.isHalt = false;
                          }
                        else {
                          const v668 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v671 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v424);
                          const v673 = v668 ? v423 : v434;
                          sim_r.txns.push({
                            amt: v671,
                            kind: 'from',
                            to: v673,
                            tok: undefined
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v532],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v423, v424, v434, v446, v491, v500, v512, v524, v532],
                      evt_cnt: 0,
                      funcNum: 19,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                        
                        const [] = txn10.data;
                        const v550 = txn10.time;
                        const v551 = txn10.secs;
                        const v549 = txn10.from;
                        
                        sim_r.txns.push({
                          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                          kind: 'to',
                          tok: undefined
                          });
                        const v553 = stdlib.addressEq(v423, v549);
                        stdlib.assert(v553, {
                          at: 'reach standard library:209:7:dot',
                          fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                          msg: 'sender correct',
                          who: 'Alice'
                          });
                        sim_r.txns.push({
                          amt: v446,
                          kind: 'from',
                          to: v423,
                          tok: undefined
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: true,
                      timeoutAt: undefined,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const [] = txn10.data;
                    const v550 = txn10.time;
                    const v551 = txn10.secs;
                    const v549 = txn10.from;
                    ;
                    const v553 = stdlib.addressEq(v423, v549);
                    stdlib.assert(v553, {
                      at: 'reach standard library:209:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    }
                  else {
                    const [v538] = txn9.data;
                    const v539 = txn9.time;
                    const v540 = txn9.secs;
                    const v537 = txn9.from;
                    ;
                    const v542 = stdlib.addressEq(v423, v537);
                    stdlib.assert(v542, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v543;
                    const v544 = stdlib.eq(v524, v500);
                    if (v544) {
                      v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v545 = stdlib.add(v512, v491);
                      const v546 = stdlib.eq(v545, v524);
                      if (v546) {
                        v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v548 = stdlib.eq(v545, v500);
                        if (v548) {
                          v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv439 = v543;
                    const cv440 = v539;
                    const cv446 = v446;
                    
                    v439 = cv439;
                    v440 = cv440;
                    v446 = cv446;
                    
                    continue;}
                  }
                }
              }
            }
          }
        }
      }
    const v668 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v671 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v424);
    const v673 = v668 ? v423 : v434;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v439), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v58 = await ctc.creationTime();
  const v59 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v424] = txn1.data;
  const v425 = txn1.time;
  const v426 = txn1.secs;
  const v423 = txn1.from;
  ;
  const v430 = stdlib.add(v425, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
  stdlib.protect(ctc1, await interact.acceptWager(v424), {
    at: './index.rsh:93:29:application',
    fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v423, v424, v430],
    evt_cnt: 0,
    funcNum: 2,
    onlyIf: true,
    out_tys: [],
    pay: [v424, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn2.data;
      const v435 = txn2.time;
      const v436 = txn2.secs;
      const v434 = txn2.from;
      
      const v438 = stdlib.add(v424, v424);
      sim_r.txns.push({
        amt: v424,
        kind: 'to',
        tok: undefined
        });
      const v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v440 = v435;
      const v446 = v438;
      
      if ((() => {
        const v454 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v454;})()) {
        const v456 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        sim_r.isHalt = false;
        }
      else {
        const v668 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v671 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v424);
        const v673 = v668 ? v423 : v434;
        sim_r.txns.push({
          amt: v671,
          kind: 'from',
          to: v673,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v430],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v685 = txn3.time;
    const v686 = txn3.secs;
    const v684 = txn3.from;
    ;
    const v688 = stdlib.addressEq(v423, v684);
    stdlib.assert(v688, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:85:35:application',
      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:95:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v435 = txn2.time;
    const v436 = txn2.secs;
    const v434 = txn2.from;
    const v438 = stdlib.add(v424, v424);
    ;
    let v439 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v440 = v435;
    let v446 = v438;
    
    while ((() => {
      const v454 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v454;})()) {
      const v456 = stdlib.add(v440, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
      const txn3 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: ['time', v456],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v423, v424, v434, v446, v456],
          evt_cnt: 0,
          funcNum: 7,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const [] = txn4.data;
            const v652 = txn4.time;
            const v653 = txn4.secs;
            const v651 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v655 = stdlib.addressEq(v434, v651);
            stdlib.assert(v655, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v446,
              kind: 'from',
              to: v434,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v652 = txn4.time;
        const v653 = txn4.secs;
        const v651 = txn4.from;
        ;
        const v655 = stdlib.addressEq(v434, v651);
        stdlib.assert(v655, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:85:35:application',
          fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:118:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const [v469] = txn3.data;
        const v470 = txn3.time;
        const v471 = txn3.secs;
        const v468 = txn3.from;
        ;
        const v473 = stdlib.addressEq(v423, v468);
        stdlib.assert(v473, {
          at: './index.rsh:117:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v475 = stdlib.add(v470, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc2],
          timeoutAt: ['time', v475],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v423, v424, v434, v446, v469, v475],
            evt_cnt: 0,
            funcNum: 9,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [] = txn5.data;
              const v635 = txn5.time;
              const v636 = txn5.secs;
              const v634 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v638 = stdlib.addressEq(v434, v634);
              stdlib.assert(v638, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v446,
                kind: 'from',
                to: v434,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v635 = txn5.time;
          const v636 = txn5.secs;
          const v634 = txn5.from;
          ;
          const v638 = stdlib.addressEq(v434, v634);
          stdlib.assert(v638, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:85:35:application',
            fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:122:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          }
        else {
          const [v478] = txn4.data;
          const v479 = txn4.time;
          const v480 = txn4.secs;
          const v477 = txn4.from;
          ;
          const v482 = stdlib.addressEq(v423, v477);
          stdlib.assert(v482, {
            at: './index.rsh:121:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v484 = stdlib.add(v479, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
          const v488 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:131:48:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v489 = stdlib.protect(ctc0, await interact.getGuess(v488), {
            at: './index.rsh:133:44:application',
            fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v423, v424, v434, v446, v469, v478, v484, v488],
            evt_cnt: 1,
            funcNum: 10,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [v491] = txn5.data;
              const v492 = txn5.time;
              const v493 = txn5.secs;
              const v490 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v495 = stdlib.addressEq(v434, v490);
              stdlib.assert(v495, {
                at: './index.rsh:140:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v497 = stdlib.add(v492, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v484],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              evt_cnt: 0,
              funcNum: 11,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v618 = txn6.time;
            const v619 = txn6.secs;
            const v617 = txn6.from;
            ;
            const v621 = stdlib.addressEq(v423, v617);
            stdlib.assert(v621, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:85:35:application',
              fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:141:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            }
          else {
            const [v491] = txn5.data;
            const v492 = txn5.time;
            const v493 = txn5.secs;
            const v490 = txn5.from;
            ;
            const v495 = stdlib.addressEq(v434, v490);
            stdlib.assert(v495, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v497 = stdlib.add(v492, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.sendrecv({
              args: [v423, v424, v434, v446, v469, v478, v491, v497, v489],
              evt_cnt: 1,
              funcNum: 12,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const [v500] = txn6.data;
                const v501 = txn6.time;
                const v502 = txn6.secs;
                const v499 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v504 = stdlib.addressEq(v434, v499);
                stdlib.assert(v504, {
                  at: './index.rsh:143:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v506 = stdlib.add(v501, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v497],
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                evt_cnt: 0,
                funcNum: 13,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v601 = txn7.time;
              const v602 = txn7.secs;
              const v600 = txn7.from;
              ;
              const v604 = stdlib.addressEq(v423, v600);
              stdlib.assert(v604, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:85:35:application',
                fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:144:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              }
            else {
              const [v500] = txn6.data;
              const v501 = txn6.time;
              const v502 = txn6.secs;
              const v499 = txn6.from;
              ;
              const v504 = stdlib.addressEq(v434, v499);
              stdlib.assert(v504, {
                at: './index.rsh:143:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v506 = stdlib.add(v501, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 14,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v506],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v423, v424, v434, v446, v469, v478, v491, v500, v506],
                  evt_cnt: 0,
                  funcNum: 15,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                    
                    const [] = txn8.data;
                    const v584 = txn8.time;
                    const v585 = txn8.secs;
                    const v583 = txn8.from;
                    
                    sim_r.txns.push({
                      amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                      kind: 'to',
                      tok: undefined
                      });
                    const v587 = stdlib.addressEq(v434, v583);
                    stdlib.assert(v587, {
                      at: 'reach standard library:209:7:dot',
                      fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    sim_r.txns.push({
                      amt: v446,
                      kind: 'from',
                      to: v434,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: undefined,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const [] = txn8.data;
                const v584 = txn8.time;
                const v585 = txn8.secs;
                const v583 = txn8.from;
                ;
                const v587 = stdlib.addressEq(v434, v583);
                stdlib.assert(v587, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:85:35:application',
                  fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:155:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                }
              else {
                const [v511, v512] = txn7.data;
                const v513 = txn7.time;
                const v514 = txn7.secs;
                const v510 = txn7.from;
                ;
                const v516 = stdlib.addressEq(v423, v510);
                stdlib.assert(v516, {
                  at: './index.rsh:154:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v517 = stdlib.digest(ctc3, [v511, v512]);
                const v518 = stdlib.digestEq(v469, v517);
                stdlib.assert(v518, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:157:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v520 = stdlib.add(v513, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.recv({
                  evt_cnt: 2,
                  funcNum: 16,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v520],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v423, v424, v434, v446, v478, v491, v500, v512, v520],
                    evt_cnt: 0,
                    funcNum: 17,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                      
                      const [] = txn9.data;
                      const v567 = txn9.time;
                      const v568 = txn9.secs;
                      const v566 = txn9.from;
                      
                      sim_r.txns.push({
                        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                        kind: 'to',
                        tok: undefined
                        });
                      const v570 = stdlib.addressEq(v434, v566);
                      stdlib.assert(v570, {
                        at: 'reach standard library:209:7:dot',
                        fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Bob'
                        });
                      sim_r.txns.push({
                        amt: v446,
                        kind: 'from',
                        to: v434,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: undefined,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const [] = txn9.data;
                  const v567 = txn9.time;
                  const v568 = txn9.secs;
                  const v566 = txn9.from;
                  ;
                  const v570 = stdlib.addressEq(v434, v566);
                  stdlib.assert(v570, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:85:35:application',
                    fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:161:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  }
                else {
                  const [v523, v524] = txn8.data;
                  const v525 = txn8.time;
                  const v526 = txn8.secs;
                  const v522 = txn8.from;
                  ;
                  const v528 = stdlib.addressEq(v423, v522);
                  stdlib.assert(v528, {
                    at: './index.rsh:160:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v529 = stdlib.digest(ctc3, [v523, v524]);
                  const v530 = stdlib.digestEq(v478, v529);
                  stdlib.assert(v530, {
                    at: 'reach standard library:65:17:application',
                    fs: ['at ./index.rsh:162:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v532 = stdlib.add(v525, stdlib.checkedBigNumberify('./index.rsh:76:18:decimal', stdlib.UInt_max, 30));
                  const txn9 = await (ctc.recv({
                    evt_cnt: 1,
                    funcNum: 18,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v532],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.recv({
                      evt_cnt: 0,
                      funcNum: 19,
                      out_tys: [],
                      timeoutAt: undefined,
                      waitIfNotPresent: false
                      }));
                    const [] = txn10.data;
                    const v550 = txn10.time;
                    const v551 = txn10.secs;
                    const v549 = txn10.from;
                    ;
                    const v553 = stdlib.addressEq(v423, v549);
                    stdlib.assert(v553, {
                      at: 'reach standard library:209:7:dot',
                      fs: ['at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:85:35:application',
                      fs: ['at ./index.rsh:84:15:application call to [unknown function] (defined at: ./index.rsh:84:27:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:172:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    }
                  else {
                    const [v538] = txn9.data;
                    const v539 = txn9.time;
                    const v540 = txn9.secs;
                    const v537 = txn9.from;
                    ;
                    const v542 = stdlib.addressEq(v423, v537);
                    stdlib.assert(v542, {
                      at: './index.rsh:171:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v543;
                    const v544 = stdlib.eq(v524, v500);
                    if (v544) {
                      v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v545 = stdlib.add(v512, v491);
                      const v546 = stdlib.eq(v545, v524);
                      if (v546) {
                        v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v548 = stdlib.eq(v545, v500);
                        if (v548) {
                          v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v543 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv439 = v543;
                    const cv440 = v539;
                    const cv446 = v446;
                    
                    v439 = cv439;
                    v440 = cv440;
                    v446 = cv446;
                    
                    continue;}
                  }
                }
              }
            }
          }
        }
      }
    const v668 = stdlib.eq(v439, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v671 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:181:16:decimal', stdlib.UInt_max, 2), v424);
    const v673 = v668 ? v423 : v434;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v439), {
      at: './index.rsh:185:28:application',
      fs: ['at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:88:9:dot"
// "[]"
load 255
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
global Round
int 30
+
store 254
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 255
itob
concat
load 254
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:94:9:dot"
// "[]"
load 254
dup
bz l3
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l3:
pop
load 255
load 254
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAE=)
global Round
itob
concat
load 254
dup
+
itob
concat
b loop4
l2:
// Handler 3
dup
int 3
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:95:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l6:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4:
l7:
l8:
// Handler 6
dup
int 6
==
bz l9
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 250
pop
// compute state in HM_Check 6
byte base64(AAAAAAAAAAY=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:117:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:117:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 249
// compute state in HM_Set 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l9:
// Handler 7
dup
int 7
==
bz l10
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 6
byte base64(AAAAAAAAAAY=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:118:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l11
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l11:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l12:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l10:
// Handler 8
dup
int 8
==
bz l13
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
pop
// compute state in HM_Check 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
sha256
load 1
==
assert
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:121:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:121:11:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 30
+
store 248
// compute state in HM_Set 10
byte base64(AAAAAAAAAAo=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 249
concat
load 248
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l13:
// Handler 9
dup
int 9
==
bz l14
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
sha256
load 1
==
assert
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:122:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l15
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l15:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l16:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l14:
// Handler 10
dup
int 10
==
bz l17
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
// compute state in HM_Check 10
byte base64(AAAAAAAAAAo=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:140:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:140:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 247
// compute state in HM_Set 12
byte base64(AAAAAAAAAAw=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 248
itob
concat
load 247
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l17:
// Handler 11
dup
int 11
==
bz l18
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 10
byte base64(AAAAAAAAAAo=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:141:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l19
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l19:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l20:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l18:
// Handler 12
dup
int 12
==
bz l21
pop
txna ApplicationArgs 1
dup
len
int 160
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 247
pop
// compute state in HM_Check 12
byte base64(AAAAAAAAAAw=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
sha256
load 1
==
assert
global Round
load 248
<
assert
// "CheckPay"
// "./index.rsh:143:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:143:11:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 30
+
store 246
// compute state in HM_Set 14
byte base64(AAAAAAAAAA4=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 247
itob
concat
load 246
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l21:
// Handler 13
dup
int 13
==
bz l22
pop
txna ApplicationArgs 1
dup
len
int 160
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 12
byte base64(AAAAAAAAAAw=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
sha256
load 1
==
assert
global Round
load 248
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:144:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l23
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l23:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l24:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22:
// Handler 14
dup
int 14
==
bz l25
pop
txna ApplicationArgs 1
dup
len
int 168
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
dup
substring 160 168
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 246
dup
substring 8 16
btoi
store 245
pop
// compute state in HM_Check 14
byte base64(AAAAAAAAAA4=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:154:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:154:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:157:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
// compute state in HM_Set 16
byte base64(AAAAAAAAABA=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l25:
// Handler 15
dup
int 15
==
bz l26
pop
txna ApplicationArgs 1
dup
len
int 168
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
dup
substring 152 160
btoi
store 248
dup
substring 160 168
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 14
byte base64(AAAAAAAAAA4=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:155:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l27
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l27:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l28:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l26:
// Handler 16
dup
int 16
==
bz l29
pop
txna ApplicationArgs 1
dup
len
int 144
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
dup
substring 120 128
btoi
store 249
dup
substring 128 136
btoi
store 248
dup
substring 136 144
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 246
dup
substring 8 16
btoi
store 245
pop
// compute state in HM_Check 16
byte base64(AAAAAAAAABA=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:160:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:160:11:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:162:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 246
itob
load 245
itob
concat
sha256
==
assert
global Round
int 30
+
store 244
// compute state in HM_Set 18
byte base64(AAAAAAAAABI=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 245
itob
concat
load 244
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l29:
// Handler 17
dup
int 17
==
bz l30
pop
txna ApplicationArgs 1
dup
len
int 144
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
dup
substring 120 128
btoi
store 249
dup
substring 128 136
btoi
store 248
dup
substring 136 144
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 16
byte base64(AAAAAAAAABA=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:161:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 252
dup
bz l31
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l31:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l32:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l30:
// Handler 18
dup
int 18
==
bz l33
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
dup
substring 112 120
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 246
pop
// compute state in HM_Check 18
byte base64(AAAAAAAAABI=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
<
assert
// "CheckPay"
// "./index.rsh:171:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:171:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 248
load 250
==
bz l34
int 1
store 245
b l35
l34:
load 249
load 251
+
dup
store 244
load 248
==
bz l36
int 2
store 245
b l37
l36:
load 244
load 250
==
bz l38
int 0
store 245
b l39
l38:
int 1
store 245
l39:
l37:
l35:
load 255
load 254
itob
concat
load 253
concat
load 245
itob
global Round
itob
concat
load 252
itob
concat
b loop4
l33:
// Handler 19
dup
int 19
==
bz l40
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
dup
substring 112 120
btoi
store 247
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 18
byte base64(AAAAAAAAABI=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
load 247
itob
concat
sha256
load 1
==
assert
global Round
load 247
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:172:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 252
dup
bz l41
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l41:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l42:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l40:
int 0
assert
loop4:
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
pop
dup
substring 0 32
store 252
dup
substring 32 40
btoi
store 251
dup
substring 40 72
store 250
pop
load 255
int 1
==
bz l43
load 254
int 30
+
store 249
// compute state in HM_Set 6
byte base64(AAAAAAAAAAY=)
load 252
concat
load 251
itob
concat
load 250
concat
load 253
itob
concat
load 249
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l43:
load 252
load 251
itob
concat
load 250
concat
load 255
itob
concat
byte base64()
loop5:
pop
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
int 2
load 254
*
dup
bz l44
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
load 255
load 252
int 2
==
select
dig 1
gtxns Receiver
==
assert
l44:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l45:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v484",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v484",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v511",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v523",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v532",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v532",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T37",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e19",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v484",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v484",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v511",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v506",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v523",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v532",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v538",
                "type": "uint256"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v491",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v524",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v532",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T37",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m19",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v430",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v456",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v478",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v423",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v434",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v446",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v469",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v475",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602091820152815160008183018190528184018190528351808303850181526060909201909352805191012090556120c6806100766000396000f3fe6080604052600436106101025760003560e01c8063a6817c4a11610095578063d1fac65b11610064578063d1fac65b146101f4578063dd976a1714610207578063e163d7c41461021a578063e91b1e5e1461022d578063eb041d851461024057600080fd5b8063a6817c4a146101a8578063b32a639f146101bb578063b861cb10146101ce578063cbe8b6a3146101e157600080fd5b80634188e022116100d15780634188e0221461015c5780636cc4a8441461016f5780636dacfd6f1461018257806394e8bd391461019557600080fd5b806309f9cd391461010e5780631d8cae72146101235780631dc091ad146101365780632438df701461014957600080fd5b3661010957005b600080fd5b61012161011c366004611b31565b610253565b005b610121610131366004611b14565b61035b565b610121610144366004611b4e565b610574565b610121610157366004611b60565b610687565b61012161016a366004611abe565b610789565b61012161017d366004611aa2565b610853565b610121610190366004611abe565b610a09565b6101216101a3366004611af7565b610bdc565b6101216101b6366004611b31565b610d88565b6101216101c9366004611ada565b610e43565b6101216101dc366004611aa2565b610efa565b6101216101ef366004611b31565b610fb4565b610121610202366004611b14565b611161565b610121610215366004611ada565b61135a565b610121610228366004611b60565b61154a565b61012161023b366004611b31565b611649565b61012161024e366004611af7565b611704565b60405161028f9061026b906012908490602001611fa4565b6040516020818303038152906040528051906020012060001c6000541460486117b7565b600080556102a661010082013543101560496117b7565b7fcb0cd18f54e48d24312a65e73e86ee2bd093b2bb5d16d254b55d40d128aaf5bd816040516102d59190611ed7565b60405180910390a16102e9341560466117b7565b61030b336102fa6020840184611a65565b6001600160a01b03161460476117b7565b6103186020820182611a65565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610353573d6000803e3d6000fd5b506000805533ff5b60405161039790610373906010908490602001611fa4565b6040516020818303038152906040528051906020012060001c60005414603c6117b7565b600080805560408051602081019091529081526103bc6101008301354310603d6117b7565b7f5cacb7816a4293c63b1bb63a96980b5a3bf1ae3a4d787d499122c470b2b2cefd826040516103eb9190611eab565b60405180910390a16103ff341560396117b7565b610421336104106020850185611a65565b6001600160a01b031614603a6117b7565b604080516101208401356020820152610140840135918101919091526104699060600160408051601f198184030181529190528051602090910120608084013514603b6117b7565b610474601e43612043565b8152604080516101208101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820152906104ca90840184611a65565b6001600160a01b03168152602080840135908201526104ef6060840160408501611a65565b6001600160a01b03166040808301919091526060808501359083015260a080850135608084015260c0808601359184019190915260e0808601359184019190915261014085013590830152825161010083015251610554906012908390602001611fb9565b60408051601f198184030181529190528051602090910120600055505050565b6105c660006105866020840184611a87565b6040516020016105a29291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c6000541460086117b7565b600080805560408051602081018252918252517f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d990610606908490611f0a565b60405180910390a161061f3460208401351460076117b7565b61062a601e43612043565b81526040805160608082018352600082840190815233835260208681013581850190815286518352855160019281019290925284516001600160a01b0316958201959095529351918401919091525160808301529060a001610554565b6040516106c39061069f906001908490602001611f90565b6040516020818303038152906040528051906020012060001c60005414600a6117b7565b600080556106d860408201354310600b6117b7565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516107079190611f2b565b60405180910390a16107203460208301351460096117b7565b610728611971565b6107356020830183611a65565b81516001600160a01b039091169052805160208084013591810182905282513360409091015280830180516001905251439101526107739080612043565b602082015160400152610785816117dc565b5050565b6040516107c5906107a1906008908490602001611f52565b6040516020818303038152906040528051906020012060001c60005414601e6117b7565b600080556107db60a0820135431015601f6117b7565b7fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b8160405161080a9190611df7565b60405180910390a161081e3415601c6117b7565b610843336108326060840160408501611a65565b6001600160a01b031614601d6117b7565b6103186060820160408301611a65565b60405161088f9061086b90600690849060200161202f565b6040516020818303038152906040528051906020012060001c6000541460126117b7565b600080805560408051602081019091529081526108b36080830135431060136117b7565b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef9826040516108e29190611d98565b60405180910390a16108f6341560106117b7565b610918336109076020850185611a65565b6001600160a01b03161460116117b7565b610923601e43612043565b81526040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a08201529061096290840184611a65565b6001600160a01b03168152602080840135908201526109876060840160408501611a65565b6001600160a01b03908116604083810191825260608681013581860190815260a08089013560808089019182528951838a01908152865160086020808301919091528b518b1698820198909852968a0151958701959095529551909616948401949094525192820192909252915160c08301525160e082015261010001610554565b604051610a4590610a21906008908490602001611f52565b6040516020818303038152906040528051906020012060001c60005414601a6117b7565b60008080556040805160208101909152908152610a6960a08301354310601b6117b7565b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b482604051610a989190611ddb565b60405180910390a1610aac341560186117b7565b610ace33610abd6020850185611a65565b6001600160a01b03161460196117b7565b610ad9601e43612043565b81526040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015290610b1f90840184611a65565b6001600160a01b0316815260208084013590820152610b446060840160408501611a65565b6001600160a01b03908116604083810191825260608681013581860190815260808089013581880190815260c0808b013560a0808b019182528b51838c019081528851600a6020808301919091528d518d169a82019a909a52988c0151978901979097529751909816928601929092529151948401949094525192820192909252915160e08301525161010082015261012001610554565b604051610c1890610bf490600c908490602001611f7b565b6040516020818303038152906040528051906020012060001c60005414602a6117b7565b60008080556040805160208101909152908152610c3c60e08301354310602b6117b7565b7f91e00b31ee2f6375f9a7712dda17a3003e4444ed590706f9ce75b98c2fbc7e8982604051610c6b9190611e63565b60405180910390a1610c7f341560286117b7565b610ca433610c936060850160408601611a65565b6001600160a01b03161460296117b7565b610caf601e43612043565b8152604080516101208101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082015290610d0590840184611a65565b6001600160a01b0316815260208084013590820152610d2a6060840160408501611a65565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501359083015260c080850135908301526101008085013560e08401528351908301525161055490600e908390602001611fb9565b604051610dc490610da0906010908490602001611fa4565b6040516020818303038152906040528051906020012060001c6000541460406117b7565b60008055610ddb61010082013543101560416117b7565b7fdcc9127a1e0e468858be1baaf7ac6456427de09110d979616adaf4b7578fac6281604051610e0a9190611ed7565b60405180910390a1610e1e3415603e6117b7565b61084333610e326060840160408501611a65565b6001600160a01b031614603f6117b7565b604051610e7f90610e5b90600a908490602001611f66565b6040516020818303038152906040528051906020012060001c6000541460266117b7565b60008055610e9560c082013543101560276117b7565b7fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa81604051610ec49190611e3b565b60405180910390a1610ed8341560246117b7565b61030b33610ee96020840184611a65565b6001600160a01b03161460256117b7565b604051610f3690610f1290600690849060200161202f565b6040516020818303038152906040528051906020012060001c6000541460166117b7565b60008055610f4c608082013543101560176117b7565b7f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e081604051610f7b9190611db4565b60405180910390a1610f8f341560146117b7565b61084333610fa36060840160408501611a65565b6001600160a01b03161460156117b7565b604051610ff090610fcc906012908490602001611fa4565b6040516020818303038152906040528051906020012060001c6000541460446117b7565b600080805560408051808201909152818152602081019190915261101c610100830135431060456117b7565b7ff10cc85109a59db91967f4aa11f738ab67c27f85da1f799a1522ae4611be63f78260405161104b9190611eec565b60405180910390a161105f341560426117b7565b611081336110706020850185611a65565b6001600160a01b03161460436117b7565b60e082013560a0830135141561109a57600181526110e5565b6110ac608083013560c0840135612043565b6020820181905260e083013514156110c757600281526110e5565b602081015160a083013514156110e057600081526110e5565b600181525b6110ed611971565b6110fa6020840184611a65565b81516001600160a01b03909116905280516020808501359101526111246060840160408501611a65565b81516001600160a01b039091166040918201528251602080840180519290925281514391015251606085013591015261115c816117dc565b505050565b60405161119d9061117990600e908490602001611fa4565b6040516020818303038152906040528051906020012060001c6000541460336117b7565b600080805560408051602081019091529081526111c2610100830135431060346117b7565b7ffe2c883248f45579fe462bf3ecd950438902e69351614714f2408cad1ae3bab0826040516111f19190611eab565b60405180910390a1611205341560306117b7565b611227336112166020850185611a65565b6001600160a01b03161460316117b7565b6040805161012084013560208201526101408401359181019190915261126f9060600160408051601f19818403018152919052805160209091012060808401351460326117b7565b61127a601e43612043565b8152604080516101208101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820152906112d090840184611a65565b6001600160a01b03168152602080840135908201526112f56060840160408501611a65565b6001600160a01b03166040808301919091526060808501359083015260a080850135608084015260c0808601359184019190915260e0808601359184019190915261014085013590830152825161010083015251610554906010908390602001611fb9565b6040516113969061137290600a908490602001611f66565b6040516020818303038152906040528051906020012060001c6000541460226117b7565b600080805560408051602081019091529081526113ba60c0830135431060236117b7565b7fb4c471ef97111ce478bb7d28cd3ff17a93e4a969c287e61351792deb8b12d5ae826040516113e99190611e1e565b60405180910390a16113fd341560206117b7565b611422336114116060850160408601611a65565b6001600160a01b03161460216117b7565b61142d601e43612043565b8152604080516101008101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201529061147b90840184611a65565b6001600160a01b03168152602080840135908201526114a06060840160408501611a65565b6001600160a01b03908116604083810191825260608681013581860190815260808089013581880190815260a0808b0135818a0190815260e0808d013560c0808d019182528d51838e019081528a51600c6020808301919091528f518f169c82019c909c529a8e0151998b01999099529951909a16948801949094529351908601525194840194909452519282019290925291516101008301525161012082015261014001610554565b60405161158690611562906001908490602001611f90565b6040516020818303038152906040528051906020012060001c60005414600e6117b7565b6000805561159c6040820135431015600f6117b7565b7fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516115cb9190611f2b565b60405180910390a16115df3415600c6117b7565b611601336115f06020840184611a65565b6001600160a01b031614600d6117b7565b61160e6020820182611a65565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610353573d6000803e3d6000fd5b6040516116859061166190600e908490602001611fa4565b6040516020818303038152906040528051906020012060001c6000541460376117b7565b6000805561169c61010082013543101560386117b7565b7fff48315370391688acee1930884fa599ea28bb381621ed2995f7026497c8bab2816040516116cb9190611ed7565b60405180910390a16116df341560356117b7565b610843336116f36060840160408501611a65565b6001600160a01b03161460366117b7565b6040516117409061171c90600c908490602001611f7b565b6040516020818303038152906040528051906020012060001c60005414602e6117b7565b6000805561175660e0820135431015602f6117b7565b7f227fbd1aeae57cb534977f6608441d2103b91cb04c437d23fc7e15ea0ef8f151816040516117859190611e81565b60405180910390a16117993415602c6117b7565b61030b336117aa6020840184611a65565b6001600160a01b031614602d5b816107855760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156118ab57601e82602001516020015161180e9190612043565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089019687528b51516001600160a01b039081168a528c5187015186528c518b0151811685528c8701518b015183528b5188528a51600697810197909752895181169a87019a909a529351918501919091529051909616908201529351918401919091525160c08301529060e001610554565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528851516001600160a01b03908116909452885185015190925287519095015190911690935284015151918290529061115c90829060021461192457805160400151611928565b8051515b6001600160a01b03166108fc8260000151602001516002611949919061205b565b6040518115909202916000818181858888f19350505050158015610353573d6000803e3d6000fd5b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016119be60405180606001604052806000815260200160008152602001600081525090565b905290565b80356001600160a01b03811681146119da57600080fd5b919050565b803580151581146119da57600080fd5b600060c08284031215611a0157600080fd5b50919050565b600060e08284031215611a0157600080fd5b60006101008284031215611a0157600080fd5b60006101208284031215611a0157600080fd5b60006101608284031215611a0157600080fd5b60006101408284031215611a0157600080fd5b600060208284031215611a7757600080fd5b611a80826119c3565b9392505050565b600060208284031215611a9957600080fd5b611a80826119df565b600060c08284031215611ab457600080fd5b611a8083836119ef565b600060e08284031215611ad057600080fd5b611a808383611a07565b60006101008284031215611aed57600080fd5b611a808383611a19565b60006101208284031215611b0a57600080fd5b611a808383611a2c565b60006101608284031215611b2757600080fd5b611a808383611a3f565b60006101408284031215611b4457600080fd5b611a808383611a52565b600060408284031215611a0157600080fd5b600060808284031215611a0157600080fd5b6001600160a01b0380611b84836119c3565b1683526020820135602084015280611b9e604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380611bd9836119c3565b1683526020820135602084015280611bf3604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0380611c38836119c3565b1683526020820135602084015280611c52604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b03611ca0826119c3565b16825260208181013590830152604090810135910152565b6001600160a01b0380611cca836119c3565b1683526020820135602084015280611ce4604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301526101008082013581840152505050565b611d378282611cb8565b610120611d458183016119df565b151581840152505050565b6001600160a01b0380611d62836119c3565b1683526020820135602084015280611d7c604084016119c3565b1660408401525060608181013590830152608090810135910152565b60c08101611da68284611d50565b60a092830135919092015290565b60c08101611dc28284611d50565b611dce60a084016119df565b151560a083015292915050565b60e08101611de98284611b72565b60c092830135919092015290565b60e08101611e058284611b72565b611e1160c084016119df565b151560c083015292915050565b6101008101611e2d8284611bc7565b60e092830135919092015290565b6101008101611e4a8284611bc7565b611e5660e084016119df565b151560e083015292915050565b6101208101611e728284611c26565b61010092830135919092015290565b6101208101611e908284611c26565b610100611e9e8185016119df565b1515818401525092915050565b6101608101611eba8284611cb8565b610120838101358382015261014080850135908401525092915050565b6101408101611ee68284611d2d565b92915050565b6101408101611efb8284611cb8565b61012092830135919092015290565b60408101611f17836119df565b151582526020830135602083015292915050565b60808101611f398284611c8f565b611f45606084016119df565b1515606083015292915050565b82815260e08101611a806020830184611b72565b8281526101008101611a806020830184611bc7565b8281526101208101611a806020830184611c26565b82815260808101611a806020830184611c8f565b8281526101408101611a806020830184611cb8565b8281526101408101611a80602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152505050565b82815260c08101611a806020830184611d50565b600082198211156120565761205661207a565b500190565b60008160001904831182151516156120755761207561207a565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220677179fb80b349d392451729231ccfdf97048975caff83ede4e35e82e28037fa64736f6c63430008070033`,
  BytecodeLen: 8508,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

