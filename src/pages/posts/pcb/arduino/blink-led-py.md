---
title: "Blink a LED in Python"
date: "2020-09-25"
categories: Arduino
tags: ["arduino", "python", "linux", "PyFirmata"]
excerpt: "Programme an Arduino diffserently"
---

## Introduction
Have you ever wondered if it is possible to program an Arduino with a programming language other than C?<br>
**Python** is the answer! In today's blog, you'll *blink* a LED using the *pyFirmata* library.

## Hardware requirement
1. [Arduino Uno](https://store.arduino.cc/arduino-uno-rev3) board
2. LED (of any color)
3. 220 ohm resistor <span>&#177;</span>5% (red - red - brown - gold)
4. Hook-up wires of different colors
5. Breadboard

## Hardware setup
Connect a black wire to the side of the breadboard (the one how has a blue or black line beside).<br>
Connect one side of the resistor where you put the black wire and the other side of the resistor in an arbitrarily decided line (in the middle of the breadboard).<br>
The LED has two legs:
1. Anode: the longer leg is positive
2. Cathode: the shorter leg is negative

Connect the cathode to the resistor (using the breadboard).<br>
Connect the anode to a wire that points to PIN 13.<br><br>
**Please Note**: You can choose the pin you want, but you need to be sure to change the code accordingly.<br>

![blink setup alternative text](./arduino_blink.png)

## Software requirement
1. [Arduino IDE](https://www.arduino.cc/en/Main/Software) to download the IDE
2. [PyCharm CE](https://www.jetbrains.com/pycharm/) (or another Python IDE)

## Software setup
Arduino IDE offers a plenty of examples and firmware right inside it to facilitate development. For example, you can try to blink the LED on PIN 13 with the default C-like code:<br>
1. Press on `File`
2. `Examples`
3. `01.Basics`
4. `Blink`

Hit `Ctrl` + `U` to upload the code.<br>
Here we are: you should see the LED blink!
<hr>

Since we want to use Python instead of C, you now need to upload on the board a firmware to allow the execution of Python code inside the Arduino.<br>
So, in place of `Blink` example, let's load `StandardFirmata`:
1. Press on `File`
2. `Examples`
3. `Firmata`
4. `StandardFirmata`

Hit `Ctrl` + `U` to upload the code.
<hr>

Open your favourite Python IDE, configure a *virtual environment* and add the *pyfirmata* library with the following line typed on the Terminal:<br>
`pip install pyfirmata`

## Code
Create a new Python file called `arduino_blink.py`
```python
from pyfirmata import util, Arduino
import time


def blink(b_time):
    board = Arduino('/dev/ttyACM0')
    it = util.Iterator(board)
    it.start()

    led_13 = board.get_pin('d:13:o')
    while True:
        led_13.write(1)
        print('Led ON')
        time.sleep(b_time)
        led_13.write(0)
        print('Led OFF')
        time.sleep(b_time)


if __name__ == '__main__':
    blink(0.2)
```

In the 1st and 2nd line are used to import the libraries needed to run the program. The `blink` function has a parameter called `b_time` that represents the time in milliseconds with which the led will blink.<br>
The `board` variable stores an object defined in the *pyfirmata* library which uses the USB port to which the Arduino board is connected (it will be something like`'/dev/ttyACM0'` for Linux or `'COM1'` for Windows).
<hr>

To run the script, just type:
```bash
python arduino_blink.py
```

## Conclusion
I know blinking a LED is not so much exciting, but it's where all start! So keep learning to make increasingly difficult and interesting projects!

## Links
~ [Arduino Homepage](https://www.arduino.cc/)<br>
~ [Pyfirmata docs](https://pyfirmata.readthedocs.io/en/latest/)<br>
~ [Resistor Color Code Calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code)<br>
