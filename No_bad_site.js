//사이트 링크를 누리기 전에 사이트링크를 여기에 입력해서 악성 사이트인지 알아보세요!
//악성사이트라면 열리지 않고 악성사이트가 아니라면 사이트가 열린답니다!!
//사이트 신고 받습니다!! 계속해서 업데이트할게요^^ 현재 제가 피해를 당한 사이트는 전부 추가하였습니다.
const arr = ['https://blow.ga/vitamin303','https://blow.ga/vitamin303/','https://playentry.org/ds#!/free/5f6336272dea1a00e6cffb42?category=free&rows=20&title=&page=1&currentPage=1&sort=created&isOwnerView=false&search_title=','https://blow.ga/울프나쁨','https://blow.ga/울프나쁨/','https://www.fake.r-e.kr/','https://www.fake.r-e.kr','http://naver.me/5xNPYqk3','http://naver.me/5xNPYqk3/','https://qops.xyz/RGmLjE','https://blow.ga/20725','https://url.kr/AeMji8','https://blow.ga/vitaminface','https://www.itemmania.com','https://itemmania.com','https://qops.xyz/pgcIe7','https://blow.ga/sd','https://youtu.be/N_I2O1RBS38'];
alert("안전 사이트열기 프로그램(v.1.8.6)을 실행합니다. (복사하여 입력창에 붙여넣기 해도 됩니다. 코드실행이 종료되면 자동으로 코드가 다시 복사됩니다)")
let m1 = prompt('열고 싶은 사이트의 링크를 입력해주세요. https,http까지 입력해주세요')
for(let index in arr){
if((arr[index])==m1) {if(index >1000){alert("안전한 사이트입니다.")}else{console.log("악성 사이트 방지 프로그램을 다시 시작하려면 F5를 눌러주세요.");}};
};let WARNING = false;
arr.forEach(e => {
WARNING = WARNING || e == m1
})
if(WARNING) alert("본 사이트는 악성사이트입니다. 접근이 차단되었습니다.")
else {let m2 = confirm("안전한 사이트로 추정되지만, 단축링크라면 당신을 속일수도 있습니다. 창을 여는것에 동의하시나요?");if(m2){open(m1)}else{alert("어쩌면 잘 생각한걸지도 몰라요.")};console.log("악성 사이트 방지 프로그램을 다시 시작하려면 F5를 눌러주세요.");copy("import('https://raw.githack.com/john0817-he/john0817/master/No_bad_site.js')");}
