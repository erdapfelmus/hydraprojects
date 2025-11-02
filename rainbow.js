// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//works best with light next to camera source
// by ava :)))))))))))))))))))

a.setBins(1)
a.setCutoff(10)
a.setSmooth(0.8)
a.show()

n = 1, 5, 8 // to change colour

s0.initCam()

src(s0)
.contrast()
//.pixelate()
.kaleid(9)
.out(o2)

src(s0)
.contrast()
//.pixelate()
.kaleid(7)
.out(o3)

osc(7, ()=> a.fft[0]*(-0.01), 9)
.color(n)
//.pixelate()
.modulateKaleid(o2, 15)
.modulateRotate(o3, 2)
.contrast(1.1)
.out(o1)

render(o1)
