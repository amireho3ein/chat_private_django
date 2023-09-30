from django.shortcuts import render

from .models import Room


def index_view(request):

    context = {
        'rooms': Room.objects.all()
    }

    return render(request, 'index.html', context)


def room_view(request, room_name):
    chat_room = Room.objects.get_or_create(name=room_name)
    context = {
        'room': chat_room
    }
    return render(request, 'room.html', context)
