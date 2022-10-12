import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'
class BaiTapBurger extends Component {

    renderBreadMid = ()=>{
        let {burger} = this.props;
        let content =[];

        for(let propsBuger in burger)
        {
            let breadMid =[];
            for(let i = 0; i< burger[propsBuger]; i++ ){
                breadMid.push(<div className={propsBuger}></div>);
            }
            content.push(breadMid);
        }
        return content;

        //1 cách
        // return Object.entries(burger).map(([propsBurger, value], index) =>{
        //     let breadMid =[];
        //     for(let i=0; i< value; i++ ){
        //         breadMid.push(<div key={index} className={propsBurger}></div>)
        //     }
        //     return breadMid;
        // })
    }

    renderMenu = ()=>{
        //Lấy props từ redux về
        let{menu, burger} = this.props;
        return Object.entries(menu).map(([propsMenu, price], index) =>{
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button className='btn-success'>+</button>
                            {burger[propsMenu]}
                        <button className='btn-danger'>-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3 className='display-4 text-success text-center'>Bánh Burger</h3>
                <div className='row'>
                    <div className='col-7'>
                        <h3 className='text-center text-danger'>Bánh burger của bạn</h3>
                        <div className='breadTop'></div>
                            {this.renderBreadMid()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-5'>
                        <div className='table'>
                            <h3 className='text-center text-success'>Chọn thức ăn</h3>
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th></th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}></td>
                                    <td>Tổng cộng</td>
                                    <td>{this.props.total}</td>
                                </tr>
                            </tfoot>
                        </div>
          
                    </div>
                </div>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

export default connect(mapStateToProps)(BaiTapBurger)