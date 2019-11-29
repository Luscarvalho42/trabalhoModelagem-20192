import { Component, OnInit } from '@angular/core';
import { ModeloPublicador } from 'src/app/model/publicador.model';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.page.html',
  styleUrls: ['./inscricoes.page.scss'],
})
export class InscricoesPage implements OnInit {

  listaPublicadores: ModeloPublicador[];

  constructor() {
  }

  async ionViewDidEnter() {

    this.listaPublicadores = [
      new ModeloPublicador(
        1,
        "https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/ufla.png",
        "Portal UFLA"
      ),
      new ModeloPublicador(
        2,
        "https://ufla.br/images/noticias/2018/selos/selo-praec.jpg",
        "PRAEC"
      ),
      new ModeloPublicador(
        3,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEX///8Wk6X//P4TlaUXkaX9//3X9fIbjp4Wi6YQlqIRjadjs7MXjqDZ8fL//v7///peq7b5//9xrri72twYiZj3/P47lKCIxMZgqrbZ7vIOjJUOi5YWk6gakqLa8Ozw///L6u7V9fgKlZ0Wkq1LoKVmq61ZqKhhsatZp6oPiJ7i+PmTxsuk1Nau2OA9lp3i9vrA4uk0i5nE7OtVoKef3OCz2dX/9/6a0tLj7POn1OB8vMcAj5ORw8TE6Obu+f54uLuKvc3Y/fY2nKis3NVtpbC11uJ1urcAgJ3LzIe+AAAIOElEQVR4nO2djVbbOBaArT+MXSNF1A0Qy5Mf05aEkFJomS0sMGVnZ9//jVZOCoQAjqTEBtH7tedASCz585WsJNaVA/TWCV56B2oHDP0HDP0HDP0HDP0HDP0HDP0HDP0HDP0HDP0HDE2hmjUVZVyh2QsrDAnJCUqUiowgJHq6jJxExKwIW1Sh66SIrGCIVDQYoNiETY16VASlSuknqFERdmzGm5SoQi3xqzTUxygO9z9+fGfIJxQ+Pkp5ku9/+mxahB0H7TTJo6eajqEhUcODXjcwho8O08UysoPxlw/mRdghu72ddho9bjrGhuH2iGOMzRXlUaK7412NKp0cWRwha5jmy84FKqK8oq1WnUsnP4Uuw7xGLOROiO4MVX7Ql5hbFGAP48HxV0WKijhWGA4PhZBMWtQn8Eam8tva6OlIt4A6DXXRksuTFLka9oTUe8jNa5S4e0pV8Wv7zhes20Bgsb21IWOYCf4tjd1aabKB7Y4/x1xuz/qhIoPhdylrtJurtrs9cDTcsm1hpeGsHyo0aMuzhgx5L3VrpcmGi6EehsuNVWccnNn04RXA8mPcuCFRnQ09epiPNKvwQfw5dDN0aqU5mp1pbuocCR/Cgt6Qkue6Yk2GlO421ESD0rDvamh5Lp0zzPNWY4Zc8o2kcUOSt2p9LzMPZ3gjdDEkKxkmDRryN2/49mMIhmBoARjWAxiCoQ1gWA9gCIY2gGE9gCEY2gCG9QCGYGgDGNYDGIKhDWBYD2AIhjaAYT2AIRjaAIb1AIa/sSG6+Jewm9MkhTZMprMv/TDM9oTlXgosd6lHhulYWFYl2KitPDKkrQ+8nP/KTSirkkK+TwuPDKP0KCjnaUsTSh8s+u0cKX8MFUp/SM7Nmmo5bz7Y2M9/beuHIVI03f1x9N6M79+/n2e5DuC0Kj8MCVUEJWmWmEIVol4ZrgIYgiEYgiEY/kaGlBQqokkYhqk5WUoKku96Yoiii8nHPy97vT1ztk7aHhlefHp/JfkZZsKCD+088sKQIJUcdrnQn9wxnn6Ous0lvE1Je+ohD0T3JvLDMFLDH1Jy6+wsHUPkhyHq7JSxs8Yjw8kIc26T6jzDH0Py70AyZpMHPMMfw/AycNpLfwytM51/4Y8h3Tp744b23+rP8MnQbT0Enwwhhk/jjaHD1bUZYLhuwBAM7QHDdQOGYGgPGK4bMARDe8Bw3YBhPYaNrhPF8ZbTOlH+GLKXMWxuNTPOHNf6WtHwtEFDdtK8IUHh1bpNnoMH4pvTqoKrnUtR2nO7JuDAmTx/AUOV/SNlnauzzoFHbfX88uV1GHYnCNHBxUg2sfYl5wEbZ6RRQ97dV0pF2bW0nAnvBOds1H72NFOPYSCvaRGr+OJYWk4Ut4dLzrrXw6olvWswZOJyiCiK0ddv9Y4YZS+XovvXBa1ae76OGAq5m+tmOp1FjQXjwZ0om1G11/cT4+d+ffqFZT/Ho/M0Ryh/VqOWfihEX/cMGulB8d2xLJcVZwtqbC0IHlyNJ52K+NVlyIQ47kR0gJQaDk8PL+8mVG39MWOrYkJVydzDqslXvfH1RAewYpXkugz1OCiO00FUFOVyu0mWpllnRjaj85jHf37ihdnDZ8PhkBaq6jxak2EJEz9bw+k9PfQOTP9XUk6bR/O3cbh/4tGf5ihvHFKtV58hFkIenaZJTukyuxmqiIulO/toF5fFr0ZDKfVppXt8fhNmCY1juoQ4zghacp8KV+qKIdZnc6xH48v/7Bjx101ufycepQyOSk2GM7jpZXImgwODBvcEueYFDctheTpw64iWUcXTf7Mf9w/L+6Bw6WhIlvbFeg2Dijclcy/SQ+icodGZ6e4MtbSl1m1o9hGRMdmaM0Q0NCNJkmEc67eIDb8vtWdqeNef8uzcMGGuTJkbnz66Q9FrN6SnG1Yby6OLqns+vULDdp9jo7zVKfp8LcepP62U0CJ7L7E0m7c7PY1xLrp/e2XYHukQ2mysP8v8t9nv2hy4b6W0+DuwnHitDfcSbwwVRduB5fdXupn2M28MUY62bb/c4QI3fN3Cgd/N0PKbci6avvbkwGqGzKcYEhfDBu8z48xDQ8uNm7+O78DvZujQDz0ztNwYDF+hIbTSBTw0hBgu4KEhxHABDw0hhgt4aPj2Y/j2DS03BsNXaAitdAEwfIWG0EoX8NAQYriAh4YQwwU8NIQYLuChYYMxdFufxoGXMnRc68sBxtjLtNIXiqHlxisY9htI6rlFtlDzrTTtNWfIu/vTpIJmYxiOm0mum+7lKJvOoGzWEF3br3vpCOd7c4ZNtVJEJlcOK186UCagjePZLjZqWGRj1khP5BLLgxcxRJMrPV7UH0UueL+joltD+xqd1xGOk3N9fOo3xEL+M7g3tI1h4DqfRndE9b8jbDfX0xoelAtp9+6mapPitIvt8oe5FCdO80unk+Y7J6wqzXEdcI5H+3f5MqQI/7Bdu/gsOHSaX6qHCxTRr8dl0jm/W6w7+PVjTQ8541iOdsPbOhVR4Y4s76TFjYviuN+uiFOlIUUq6uyMJGOiOrfVEYy1oey1hsXtZHuVE5IdSf2WX5r0Djad6v1zuyrVeem9EUg2Odzrrt+uRErZ7R1+DR/UR6LssG/cLSTr9g7SqryZJYZEFcUgS/c/v6uDz+9Ob8KkeLB7ZaJPGH0yLaLVmiaUVOS9Lb+/BY0VIQlN4s11E+dUKaqKud2j04Oq6GYcG9an9MsrcxeXGkbRNH2q/GXdEJqTPI8eZNfRWWaocRkojxDNVzL0HjD0HzD0HzD0HzD0HzD0HzD0HzD0HzD0HzD0HzD0n7dv+H9wTHNlP4s+vwAAAABJRU5ErkJggg==",
        "compJunior"
      ),
      new ModeloPublicador(
        4,
        "https://pbs.twimg.com/profile_images/634838310989529088/-iiRAsLm.png",
        "DFI"
      )
    ];
  }
  
  ngOnInit() {
  }

  cancelarInscricao() {
    console.log("Tudo certo aqui");
  }

}
