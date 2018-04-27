import serial
arduinoSerialData = serial.Serial('/dev/ttyACM0',9600)

while 1:
	cha = raw_input()
	arduinoSerialData.write(cha)
	print(cha)