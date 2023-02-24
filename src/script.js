$( document ).ready(function(){
    $(function () {
        $('[data-phone-pattern]').on('input blur focus', (e) => {
            var el = e.target,
                clearVal = $(el).data('phoneClear'),
                pattern = $(el).data('phonePattern'),
                matrix_def = "+7(___) ___-__-__",
                matrix = pattern ? pattern : matrix_def,
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = $(el).val().replace(/\D/g, "");
            if (clearVal !== 'false' && e.type === 'blur') {
                if (val.length < matrix.match(/([\_\d])/g).length) {
                    $(el).val('');
                    return;
                }
            }
            if (def.length >= val.length) val = def;
            $(el).val(matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            }));
        });
    });
    $('.map').mouseover(function(){
        $('.map-popap').addClass('active-map-popap')
    });
    $('.map').mouseout(function(){
        $('.map-popap').removeClass('active-map-popap')
    });
    $('.map').click(function() {
        $('.map-popap').removeClass('active-map-popap')
        $('.map-popap').addClass('map-popap-show')
    });
    $('.map-close-btn').click(function (e) {
        e.stopPropagation()
        $('.map-popap').removeClass('active-map-popap')
        $('.map-popap').removeClass('map-popap-show')
       
    })
    $('.call-me-btn').click(function () {
        $('.popap-bg').show();
    })
    $('.close-btn').click(function(){
        $('.popap-bg').hide();
    })
    $('.mob-btn').click(function(){
        $('.mob-menu-block').toggle();
        $('.header-row').toggleClass('show-menu')
    })
})
    



const formBtn = document.querySelector('.form-btn')
const checkbox = document.querySelector('.form-checkbox');
const form = document.querySelector('.form')

const input = document.querySelectorAll('input')

for (const el of input) {
    el.addEventListener('change', function () {
        if (document.querySelector('#form-tel').value !== '' && checkbox.checked) {
            formBtn.removeAttribute("disabled")
        }
    })
}


formBtn.addEventListener('click', function () {
    
    if (document.querySelector('#form-tel').value !== '' && checkbox.checked) {
        formBtn.removeAttribute("disabled")
        document.querySelector('.thanks-txt').style.display = 'block';
        document.querySelector('.popap-content').style.display = 'none';
        document.querySelector('#form-tel').value = '';
        setTimeout(() => {
            document.querySelector('.thanks-txt').style.display = 'none';
            document.querySelector('.popap-content').style.display = 'block'
        }, 5000);
    }else{
        formBtn.setAttribute("disabled", "disabled");
        document.querySelector('.thanks-txt').style.display = 'none';
        document.querySelector('.popap-content').style.display = 'block'
    }

})

window.onscroll = function() {myFunction()};

let navbar = document.querySelector(".header-row");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    console.log(window.pageYOffset, sticky)
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
