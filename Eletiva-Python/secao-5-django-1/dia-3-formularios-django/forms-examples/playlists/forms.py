# playlists/forms.py
from django import forms
from playlists.validators import validate_name
from playlists.models import Music


# class CreateMusicForm(forms.Form):
#     name = forms.CharField(
#         max_length=50, label="Nome da música", validators=[validate_name]
#     )
#     recorded_at = forms.DateField(
#         label="Data de gravação",
#         widget=forms.DateInput(attrs={"type": "date"}),
#         initial="2023-07-06",
#     )
#     length_in_seconds = forms.IntegerField(
#         validators=[validate_music_length],
#         label="Duração em segundos",
#         min_value=1
#     )


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()


class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50, validators=[validate_name])


class CreateMusicModelForm(forms.ModelForm):
    class Meta:
        model = Music
        fields = "__all__"
        labels = {
            "name": "Nome da música",
            "recorded_at": "Data de gravação",
            "length_in_seconds": "Duração em segundos",
        }
        widgets = {
            "recorded_at": forms.DateInput(
                attrs={"type": "date", "value": "2023-07-06"}
            )
        }

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields["name"].label = "Nome da música"
    #     self.fields["recorded_at"].label = "Data de gravação"
    #     self.fields["recorded_at"].widget = forms.DateInput(
    #             attrs={"type": "date"})
    #     self.fields["recorded_at"].initial = "2023-07-06"
    #     self.fields["length_in_seconds"].label = "Duração em segundos"
    #     self.fields["singer"].label = "Artista"
    #     self.fields["singer"].widget = forms.Select(
    #         choices=[
    #             (singer.id, singer.name)
    #             for singer in Singer.objects.filter(name__contains="a")
    #         ]
    #     )