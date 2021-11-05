<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Competition extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'date_start', 'date_end', 'location'];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function races(): BelongsToMany
    {
        return $this->belongsToMany(Race::class, 'events', 'competition_id', 'race_id')->as('event')->withPivot('date');
    }
}
