from django.shortcuts import render,  redirect

from .models import Room


def index_view(request):
    if not request.user.is_authenticated:
        return redirect("login-user")
    context = {
        'rooms': Room.objects.all()
    }

    return render(request, 'index.html', context)


def room_view(request, room_name):
    chat_room, created = Room.objects.get_or_create(name=room_name)
    context = {
        'room': chat_room
    }
    return render(request, 'room.html', context)
