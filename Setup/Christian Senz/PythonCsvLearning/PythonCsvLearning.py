try:
    import numpy as np
    import pandas as pd
    import matplotlib.pyplot as plt
    import mplcursors
except:
    import pip
    pip.main(['install', "numpy"])
    pip.main(['install', "pandas"])
    pip.main(['install', "matplotlib"])
    pip.main(['install', "mplcursors"])
    import numpy as np
    import pandas as pd
    import matplotlib.pyplot as plt
    import mplcursors

data_file = pd.read_csv("C:/Users/casen/Documents/PythonCsvLearning/2020QB.csv")

player = data_file["Player"]
team = data_file["Team"]
att = data_file["ATT"]
cmps = data_file["CMP"]
yds = data_file["YDS"]
tds = data_file["TDS"]
ints = data_file["INTS"]
att2 = data_file["ATT2"]
yds2 = data_file["YDS2"]
tds2 = data_file["TDS2"]
fl = data_file["FL"]
fpts = data_file["FPTS"]

plt.figure(1)
plt.plot(player,fpts,'r.')
plt.xticks(" ")
plt.legend(['FPTS'])
plt.xlabel('Players')
plt.ylabel('FPTS')
'''
plt.figure(2)
plt.plot(player,team,'r.')
plt.xticks(" ")
plt.legend(['Team'])
plt.xlabel('Players')
plt.ylabel('Team')

plt.figure(3)
plt.plot(player,att,'r.')
plt.xticks(" ")
plt.legend(['ATT'])
plt.xlabel('Players')
plt.ylabel('ATT')

plt.figure(4)
plt.plot(player,cmps,'r.')
plt.xticks(" ")
plt.legend(['CMPS'])
plt.xlabel('Players')
plt.ylabel('CMPS')

plt.figure(5)
plt.plot(player,yds,'r.')
plt.xticks(" ")
plt.legend(['YDS'])
plt.xlabel('Players')
plt.ylabel('YDS')

plt.figure(6)
plt.plot(player,tds,'r.')
plt.xticks(" ")
plt.legend(['TDS'])
plt.xlabel('Players')
plt.ylabel('TDS')

plt.figure(7)
plt.plot(player,ints,'r.')
plt.xticks(" ")
plt.legend(['INTS'])
plt.xlabel('Players')
plt.ylabel('INTS')

plt.figure(8)
plt.plot(player,att2,'r.')
plt.xticks(" ")
plt.legend(['ATT2'])
plt.xlabel('Players')
plt.ylabel('ATT2')

plt.figure(9)
plt.plot(player,yds2,'r.')
plt.xticks(" ")
plt.legend(['YDS2'])
plt.xlabel('Players')
plt.ylabel('YDS2')

plt.figure(10)
plt.plot(player,fl,'r.')
plt.xticks(" ")
plt.legend(['FL'])
plt.xlabel('Players')
plt.ylabel('FL')
'''

mplcursors.cursor(hover=True)
plt.savefig('plot.png')
plt.show()
