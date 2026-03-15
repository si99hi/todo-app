import { Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskList.style";

export const TaskCard = ({ task, onDelete, onEdit }) => {
    return (
        <>
            <View style={styles.card}>
                <TouchableOpacity>
                    <Text 
                        style={[styles.taskTitle,
                            task.completed && 
                            {textDecorationLine: "line-through"}
                        ]}
                    >
                        {task.taskText}
                    </Text>

                    <Text 
                        style={styles.taskDesc}>
                        {task.taskDescription}
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => onEdit(task.taskId)}>
                        <Text style={styles.editText}>Edit</Text>
                    </Pressable>
                    <Pressable onPress={() => onDelete(task.taskId)}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}