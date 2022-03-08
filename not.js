function hesapla() {
  let kilo = document.KitleForm.kilo.value
  let boy = document.KitleForm.boy.value
  if(kilo > 0 && boy > 0){  
    
  let sonuc = kilo/(boy/100*boy/100)

  document.KitleForm.endeks.value = sonuc.toFixed(1)

  if(sonuc < 18.5){
  document.KitleForm.islemsonucu.value = "Zayıfsınız"
  }

  if(sonuc > 18.5 && sonuc < 25){
  document.KitleForm.islemsonucu.value = "Gayet Sağlıklı."
  }
  if(sonuc > 25){
  document.KitleForm.islemsonucu.value = "Şişmansınız."
  }
  }
  else{
  alert("Böyle kilo,boy olmaz tekrar dene")
  }
  }