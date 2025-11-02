s0.initCam()

src(s0)
.contrast()
.kaleid(8)
.out(o0)

noise()
.modulatePixelate(o0)
.contrast()
.out(o1)


render(o1)
