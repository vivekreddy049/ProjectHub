import monogoose from 'mongoose'

const projectSchema = new monogoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default monogoose.models.Project || monogoose.model('Project', projectSchema)
