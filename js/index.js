const onReady = () => {
  const ready = document.querySelector('.stage .ready')
  setTimeout(_ => {
    ready.classList.add('well')
  }, 3000)
  ready.addEventListener('mousemove', e => {
    if(ready.classList.contains('well')){
      console.log('Lasa ary')
    }
  })
}

if (document.readyState !== 'loading') onReady()
else document.addEventListener('DOMContentLoaded', onReady)

document.addEventListener('load', onReady, false);

