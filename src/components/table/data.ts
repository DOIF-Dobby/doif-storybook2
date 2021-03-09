import { TableModelProps } from './Table';

export const data1 = [
  {
    batchConfId: 'chkStatusStep',
    batchConfNm: '정산상태 체크',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:50:15',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '1',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 18:50:15',
  },
  {
    batchConfId: 'ctUdrsStep',
    batchConfNm: 'UDRS 생성',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:50:50',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '2',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 18:50:50',
  },
  {
    batchConfId: 'calcFeeStep',
    batchConfNm: '수수료계산',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:51:19',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '3',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 21:03:38',
  },
  {
    batchConfId: 'makeDtlStep',
    batchConfNm: '정산 상세 생성',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 21:03:32',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '4',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 21:03:32',
  },
  {
    batchConfId: 'adjustStep',
    batchConfNm: '수동 조정 반영',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:51:52',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '5',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 21:02:52',
  },
  {
    batchConfId: 'minusOffsetStep',
    batchConfNm: '채권상계',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:52:09',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '6',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 21:02:48',
  },
  {
    batchConfId: 'makeMstStep',
    batchConfNm: '정산 마스터 생성',
    batchConfType: 'RESL',
    batchConfTypeNm: '영업점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-11-30 18:52:32',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '7',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-30 21:02:44',
  },
  {
    batchConfId: 'chkStatusStep',
    batchConfNm: '정산상태 체크 및 기존 데이터 삭제',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '1',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-11-25 16:11:02',
  },
  {
    batchConfId: 'ctUdrsStep',
    batchConfNm: '결제수단별 UDRS 생성',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_CT_UDRS',
    procOrder: '2',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-09-28 14:20:46',
  },
  {
    batchConfId: 'calcFeeStep',
    batchConfNm: '결제수단별 수수료 계산 및  DTL 생성',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_CALC_FEE',
    procOrder: '3',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-09-28 14:20:46',
  },
  {
    batchConfId: 'updDtlNoInUdrsStep',
    batchConfNm: 'UDRS와 DTL 연결고리 생성',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_MAKE_UDRS_AND_DTL',
    procOrder: '4',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-09-28 14:20:46',
  },
  {
    batchConfId: 'adjustStep',
    batchConfNm: '조정',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_CALC_ADJUST',
    procOrder: '5',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '전혜수',
    updtdt: '2020-09-28 14:20:46',
  },
  {
    batchConfId: 'cancelPreAdjustApplyStep',
    batchConfNm: '취소 선조정 반영',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC김명진',
    crtdt: '2021-02-25 14:32:51',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '6',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:32:51',
  },
  {
    batchConfId: 'pendingStep',
    batchConfNm: '지급 보류 및 해지',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_CALC_PENDING',
    procOrder: '7',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:29:17',
  },
  {
    batchConfId: 'minusOffsetStep',
    batchConfNm: '채권상계',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '8',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:29:12',
  },
  {
    batchConfId: 'invcOffsetStep',
    batchConfNm: '청구상계',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_CALC_OFFSET_INVC',
    procOrder: '9',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:29:07',
  },
  {
    batchConfId: 'delayStep',
    batchConfNm: '지급제외',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_AUTO_DELAY',
    procOrder: '10',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:29:03',
  },
  {
    batchConfId: 'cancelPreAdjustStep',
    batchConfNm: '취소 선조정',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC김명진',
    crtdt: '2020-11-04 10:43:05',
    pPageId: '',
    pageId: '',
    procCmd: '',
    procOrder: '11',
    procType: 'J',
    procTypeNm: '자바',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:28:58',
  },
  {
    batchConfId: 'makeMstStep',
    batchConfNm: '정산 마스터 생성',
    batchConfType: 'SETL',
    batchConfTypeNm: '가맹점 정산',
    crt_user: 'ENC전혜수',
    crtdt: '2020-09-28 14:20:46',
    pPageId: '',
    pageId: '',
    procCmd: 'TPKG_SETL_CALC_BATCH.PRC_MAKE_REQ_MST',
    procOrder: '12',
    procType: 'P',
    procTypeNm: '프로시저',
    remark1: '',
    retryYn: 'Y',
    retryYnNm: '예',
    updt_user: '김명진',
    updtdt: '2021-02-25 14:28:54',
  },
];

export const model1: TableModelProps[] = [
  {
    label: '정산배치타입',
    name: 'batchConfTypeNm',
    width: 120,
    align: 'center',
  },
  {
    label: '정산배치설정ID',
    name: 'batchConfId',
    width: 150,
    align: 'left',
  },
  {
    label: '정산배치설정명',
    name: 'batchConfNm',
    width: 250,
    align: 'left',
  },
  {
    label: '실행순서',
    name: 'procOrder',
    width: 60,
    align: 'center',
  },
  {
    label: '실행타입',
    name: 'procTypeNm',
    width: 100,
    align: 'center',
  },
  {
    label: '실행커맨드',
    name: 'procCmd',
    width: 400,
    align: 'left',
  },
  {
    label: '비고',
    name: 'remark1',
    width: 150,
    align: 'left',
  },
  {
    label: '작업자',
    name: 'updt_user',
    width: 100,
    align: 'center',
  },
  {
    label: '작업일시',
    name: 'updtdt',
    width: 150,
    align: 'center',
  },
];
