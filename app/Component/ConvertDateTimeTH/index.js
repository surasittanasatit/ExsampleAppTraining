import Moment from 'moment';
import 'moment/src/locale/th';

Convert = (DateTime) => {
    let startDay = parseInt(Moment(DateTime).format('DD'));
    let startMount = Moment(DateTime).format('MM');
    let startYear = parseInt(Moment(DateTime).format('YYYY')) + 543;
    let startTime = Moment(DateTime).format('HH.mm');
    return startDay + '/' + startMount + '/' + startYear + ' ' + startTime;
}

ConvertDateTH = (DateTime) => {
    let dayTH = Moment(DateTime).format('dddd');
    let dayTHarr = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];
    let monthArr = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    let dataDay = '';
    switch (dayTH) {
        case 'Monday':
            dataDay = dayTHarr[0];
            break;
        case 'Tuesday':
            dataDay = dayTHarr[1];
            break;
        case 'Wednesday':
            dataDay = dayTHarr[2];
            break;
        case 'Thursday':
            dataDay = dayTHarr[3];
            break;
        case 'Friday':
            dataDay = dayTHarr[4];
            break;
        case 'Saturday':
            dataDay = dayTHarr[5];
            break;
        case 'Sunday':
            dataDay = dayTHarr[6];
            break;

        default:
            break;
    }
    let startDay = parseInt(Moment(DateTime).format('DD'));
    let mountTH = monthArr[parseInt(Moment(DateTime).format('MM')) - 1];
    let startYear = parseInt(Moment(DateTime).format('YYYY')) + 543;
    let startTime = Moment(DateTime).format('HH.mm');
    return 'วัน' + dataDay + 'ที่ ' + startDay + ' ' + mountTH + ' ' + startYear + ' เวลา ' + startTime + ' น.';
}

ConvertTime = (DateTime) => {
    let startTime = Moment(DateTime).format('HH.mm');
    return startTime + ' น.';
}

export default {
    Convert,
    ConvertDateTH,
    ConvertTime
};
