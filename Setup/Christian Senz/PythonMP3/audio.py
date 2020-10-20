from tkinter import *
import pygame
from tkinter import filedialog

root=Tk()
root.title("MP3 Player")
root.geometry("500x500")
pygame.mixer.init()
def addSong():
    songFile= filedialog.askopenfilename(initialdir='C:/Users/casen/Documents/PythonMP3/gui/audio/', title="Select song", filetypes=(("mp3 Files", "*.mp3"), ))
    songFile=songFile.replace("C:/Users/casen/Documents/PythonMP3/gui/audio/","")
    songFile=songFile.replace(".mp3","")
    audio_field.insert(END, songFile)

def playSong():
    songFile=audio_field.get(ACTIVE)
    songFile=f'C:/Users/casen/Documents/PythonMP3/gui/audio/{songFile}.mp3'
    pygame.mixer.music.load(songFile)
    pygame.mixer.music.play(loops=0)

def stopSong():
    pygame.mixer.music.stop()

global paused 
paused=False

def pauseSong(pause):
    global paused
    paused=pause
    if paused:
        pygame.mixer.music.unpause()
        paused = False
    else:
        pygame.mixer.music.pause()
        paused=True

def prevSong():
    previousSong=audio_field.curselection()
    previousSong=previousSong[0]-1
    newSong=audio_field.get(previousSong)
    newSong=f'C:/Users/casen/Documents/PythonMP3/gui/audio/{newSong}.mp3'
    pygame.mixer.music.load(newSong)
    pygame.mixer.music.play(loops=0)
    audio_field.selection_clear(0, END)
    audio_field.activate(previousSong)
    audio_field.selection_set(previousSong, last=None)

def nextSong():
    followingSong=audio_field.curselection()
    followingSong=followingSong[0]+1
    newSong=audio_field.get(followingSong)
    newSong=f'C:/Users/casen/Documents/PythonMP3/gui/audio/{newSong}.mp3'
    pygame.mixer.music.load(newSong)
    pygame.mixer.music.play(loops=0)
    audio_field.selection_clear(0, END)
    audio_field.activate(followingSong)
    audio_field.selection_set(followingSong, last=None)

def deleteSong():
    audio_field.delete(ANCHOR)
    pygame.mixer.music.stop()

audio_field= Listbox(root, bg="blue", fg="white", width=50)
audio_field.pack(pady=30)

previous=PhotoImage(file='C:/Users/casen/Documents/PythonMP3/gui/images/previous.png')
next_song=PhotoImage(file='C:/Users/casen/Documents/PythonMP3/gui/images/next.png')
play=PhotoImage(file='C:/Users/casen/Documents/PythonMP3/gui/images/Play.png')
pause=PhotoImage(file='C:/Users/casen/Documents/PythonMP3/gui/images/pause.png')
stop=PhotoImage(file='C:/Users/casen/Documents/PythonMP3/gui/images/stop.png')

button_frame=Frame(root)
button_frame.pack()

previous_button=Button(button_frame, image=previous,borderwidth=0, padx=7, command=prevSong)
nextsong_button=Button(button_frame, image=next_song,borderwidth=0, padx=7, command=nextSong)
play_button=Button(button_frame, image=play,borderwidth=0, padx=7, command=playSong)
pause_button=Button(button_frame, image=pause,borderwidth=0, padx=7, command=lambda: pauseSong(paused))
stop_button=Button(button_frame, image=stop,borderwidth=0, padx=7, command=stopSong)

myMenu=Menu(root)
root.config(menu=myMenu)
addSongMenu=Menu(myMenu)
myMenu.add_cascade(label="Add", menu=addSongMenu)
addSongMenu.add_command(label="Add To Playlist", command=addSong)
deleteSongMenu=Menu(myMenu)
myMenu.add_cascade(label="Delete", menu=deleteSongMenu)
deleteSongMenu.add_command(label="Delete From Playlist", command=deleteSong)

previous_button.grid(row=0, column=0)
nextsong_button.grid(row=0, column=1)
play_button.grid(row=0, column=2)
pause_button.grid(row=0, column=3)
stop_button.grid(row=0, column=4)

root.mainloop()