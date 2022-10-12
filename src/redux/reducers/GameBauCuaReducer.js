const initialState = {
  danhSachCuoc: [
    { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png' },
    { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png' },
    { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png' },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
          else {
            alert("Số tiền đặt cược tối thiểu là 100$")
          }
        }

      }

      state.danhSachCuoc = danhSachCuocUpdate;
      return {...state}
    }


    case 'PLAY_GAME_BAU_CUA': {
      const mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }

      //cập nhật lại mảng xúc xắc
      state.mangXucXac = mangXucXacNgauNhien;


      //Xử lý tăng tiền thưởng
      mangXucXacNgauNhien.forEach((xucXacNN, index) => {
        let intdexDSCuoc =state.danhSachCuoc.findIndex(qc=>qc.ma === xucXacNN.ma);
        if(index !== 1){
          state.tongDiem += state.danhSachCuoc[intdexDSCuoc].diemCuoc;
        }
      })

      //Xử lý hoàn tiền
      state.danhSachCuoc.forEach((qc,index)=>{
        let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma);
        if(indexXucXacNN !== -1){
          state.tongDiem += qc.diemCuoc;
        }

      })

      //Xử lý làm mới game
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index)=>{
        return {...qc, diemCuoc:0}
      })

      return { ...state }

    }
    case 'CHOI_LAI':{
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index)=>{
        return {...qc, diemCuoc:0}
      })

      return { ...state }
    }


    default:  return state
  }
}
