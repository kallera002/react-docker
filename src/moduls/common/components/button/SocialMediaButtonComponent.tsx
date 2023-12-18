import React from "react"
import { SocialMediaLink } from "../../_data/SocialLink"
import { AnimatePresence, motion } from "framer-motion"
import { ButtonGroup, IconButton, useColorModeValue } from "@chakra-ui/react"

const SocialMediaButtonComponent = () => {
  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        <ButtonGroup>
          {SocialMediaLink?.map((item, index) => (
            <motion.div
              key={index}
              style={{ display: "inline-block" }}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                as="a"
                href={item.link}
                target="_blank"
                fontSize="xl"
                aria-label={`Switch to ${item.name} mode`}
                variant="solid"
                colorScheme="gray"
                boxShadow="inner"
                color={useColorModeValue("black", "white")}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </ButtonGroup>
      </AnimatePresence>
    </React.Fragment>
  )
}

export { SocialMediaButtonComponent }
