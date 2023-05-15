export const SaveCart = (cartItem, cartCnt) => {
  let UserCart = localStorage.getItem('UserCart')
  if (UserCart == null || UserCart == undefined) {
    let item_array = new Map()
    item_array.set(cartItem.id.toString(), cartItem)
    item_array.get(cartItem.id.toString()).cartCount = Number(cartCnt)
    localStorage.setItem(
      'UserCart',
      JSON.stringify(Array.from(item_array.entries())),
    )
    UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))
    // Swal.fire({
    //   position: 'center',
    //   icon: 'success',
    //   title: 'პროდუქტი წარმატებით დაემატა',
    //   showConfirmButton: false,
    //   timer: 1500,
    // })
    // console.log('შესრულდა პირველი')
  } else {
    UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))

    // console.log('აქ ჩერდება')
    if (
      UserCart.get(cartItem.id.toString()) != undefined ||
      UserCart.get(cartItem.id.toString()) != null
    ) {
      if (
        UserCart.get(cartItem.id.toString()) == undefined ||
        UserCart.get(cartItem.id.toString()) == null
      ) {
        UserCart.get(cartItem.id.toString()).cartCount += Number(cartCnt)
        localStorage.setItem(
          'UserCart',
          JSON.stringify(Array.from(UserCart.entries())),
        )
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'პროდუქტი წარმატებით დაემატა',
        //   showConfirmButton: false,
        //   timer: 1500,
        // })
        // console.log('როცა კონკრ პროდ პირველად დაემატა')
      } else {
        if (
          UserCart.get(cartItem.id.toString()).cartCount
          // +
          //   Number(cartCnt) <=
          //   UserCart.get(cartItem.id.toString()).PRODUCT_COUNT
          //   ||
          // UserCart.get(cartItem.id.toString()).PRODUCTIVE == '1'
        ) {
          UserCart.get(cartItem.id.toString()).cartCount += Number(cartCnt)
          localStorage.setItem(
            'UserCart',
            JSON.stringify(Array.from(UserCart.entries())),
          )
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: 'პროდუქტი წარმატებით დაემატა',
          //   showConfirmButton: false,
          //   timer: 1500,
          // })
          // console.log(cartCount, 'COUNTYYYY')
          // console.log(cartCount, 'COUNT IN LOGIC')
          // console.log('შესრულდა მეორე')
        }
        // else {
        //   // console.log('ES 1')
        //   Swal.fire({
        //     position: 'center',
        //     icon: 'error',
        //     title: 'პროდუქტის რაოდენობა ამოწურულია',
        //     showConfirmButton: false,
        //     timer: 1500,
        //   })
        // }
      }
    } else {
      if (
        UserCart.get(cartItem.id.toString()) == undefined ||
        UserCart.get(cartItem.id.toString()) == null
      ) {
        UserCart.set(cartItem.id.toString(), cartItem)
        UserCart.get(cartItem.id.toString()).cartCount = Number(cartCnt)
        localStorage.setItem(
          'UserCart',
          JSON.stringify(Array.from(UserCart.entries())),
        )
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'პროდუქტი წარმატებით დაემატა',
        //   showConfirmButton: false,
        //   timer: 1500,
        // })
        // console.log('როცა კონკრ პროდ პირველად დაემატა')
      } else {
        if (
          UserCart.get(cartItem.UID.toString()).cartCount
          // +
          //   Number(cartCount) <=
          //   UserCart.get(cartItem.UID.toString()).PRODUCT_COUNT ||
          // UserCart.get(cartItem.UID.toString()).PRODUCTIVE !== '1'
        ) {
          UserCart.set(cartItem.UID.toString(), cartItem)
          UserCart.get(cartItem.UID.toString()).cartCount = Number(cartCnt)
          localStorage.setItem(
            'UserCart',
            JSON.stringify(Array.from(UserCart.entries())),
          )
          // Swal.fire({
          //   position: 'center',
          //   icon: 'success',
          //   title: 'პროდუქტი წარმატებით დაემატა',
          //   showConfirmButton: false,
          //   timer: 1500,
          // })
          // console.log('შესრულდა მესამე')
        }
        // else {
        //   Swal.fire({
        //     position: 'center',
        //     icon: 'error',
        //     title: 'პროდუქტის რაოდენობა ამოწურულია',
        //     showConfirmButton: false,
        //     timer: 1500,
        //   })
        // }
      }
    }
  }

  // console.log(new Map(JSON.parse(localStorage.getItem('UserCart'))), 'USERCART2')
}

export const GetCartCount = () => {
  let UserCart = localStorage.getItem('UserCart')

  if (UserCart == null || UserCart == undefined) return 0
  else {
    UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))
    if (document.getElementById('COUNTER') == null) {
      return UserCart.size
    } else {
      return (document.getElementById('COUNTER').innerHTML = UserCart.size)
    }
  }
}

export const LoadCart = () => {
  let UserCart = localStorage.getItem('UserCart')

  if (UserCart == null || UserCart == undefined) return null

  //console.log(Array.from(new Map(JSON.parse(localStorage.getItem('UserCart')))));

  return new Map(JSON.parse(localStorage.getItem('UserCart')))
}

export const ChangeCartItemCount = (id, cartCnt) => {
  let UserCart = localStorage.getItem('UserCart')
  UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))

  if (
    UserCart.get(id.toString()) != undefined ||
    UserCart.get(id.toString()) != null
  ) {
    UserCart.get(id.toString()).cartCount += Number(cartCnt)
    localStorage.setItem(
      'UserCart',
      JSON.stringify(Array.from(UserCart.entries())),
    )
  }
}

export const RemoveFromCart = (UID, COUNT) => {
  // console.log(STEP, 'STEP')
  let UserCart = localStorage.getItem('UserCart')
  UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))

  if (
    UserCart.get(UID.toString()) != undefined ||
    UserCart.get(UID.toString()) != null
  ) {
    UserCart.delete(UID.toString())
    localStorage.setItem(
      'UserCart',
      JSON.stringify(Array.from(UserCart.entries())),
    )
    var el = document.getElementById(`${UID}`)
    if (COUNT > 0) {
      el.remove()
    }

    if (UserCart.size <= 0) {
      localStorage.removeItem('UserCart')
      window.location.reload()
    }
  }
}

export const CartSumData = () => {
  let UserCart = localStorage.getItem('UserCart')
  UserCart = new Map(JSON.parse(localStorage.getItem('UserCart')))

  let CartSum = 0
  let Shipping = 0
  // let Pack = 0
  let Total = 0
  let TOTALS = {}

  Array.from(UserCart.values()).map((card, i) => {
    if (card.salePrice > 0 && card.salePrice > 0) {
      CartSum += card.salePrice * card.cartCount
    } else {
      CartSum += card.price * card.cartCount
    }
  })

  // if (CartSum > 0) {
  Shipping = (CartSum * 24) / 100

  // Pack = (CartSum + Shipping) * 0.015

  Total = CartSum + Shipping
  // + Pack
  // }

  TOTALS = {
    CartSum: Number(CartSum),
    Shipping: Number(Shipping),
    // Pack: Number(Pack),
    Total: Number(Total),
  }
  localStorage.setItem('TOTALS', JSON.stringify(TOTALS))
  function financial2(x) {
    return Number.parseFloat(x).toFixed(2)
  }

  if (document.getElementById('CartSum') != null) {
    let SUM = JSON.parse(localStorage.getItem('TOTALS'))
    document.getElementById('CartSum').innerHTML = `${financial2(
      Number(SUM.CartSum),
    )}₾`
    document.getElementById('Shipping').innerHTML = `${financial2(
      Number(SUM.Shipping),
    )}₾`
    // document.getElementById('Pack').innerHTML = `${financial2(
    //   Number(SUM.Pack),
    // )}₾`
    document.getElementById('Total').innerHTML = `${financial2(
      Number(SUM.Total),
    )}₾`
  }

  if (CartSum <= 0) {
    localStorage.removeItem('TOTALS')
  }

  // console.log('GAESHVA')
  return JSON.parse(localStorage.getItem('TOTALS'))
}

// export const AddCartToCart = () => {}
// export const continueCart = () => {}
// export const finalCart = () => {}
